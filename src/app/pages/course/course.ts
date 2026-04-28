import { Component, computed, effect, inject, signal } from '@angular/core';
import { CourseService } from '../../services/get-course';
import { toSignal } from '@angular/core/rxjs-interop';
import { Course } from '../../interface/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  imports: [CommonModule],
  templateUrl: './course.html',
  styleUrl: './course.scss',
})
export class CourseComponent {

  // Lagrar de inhämtade kurserna och data 
  courseService = inject(CourseService);

  // Sparar de inhämtade kurserna i courses för att kunna använda inom html 
  courses = this.courseService.fetchCourses();

  // Om något går fel vid anropet mot webbtjänsten så ska det lagras i errors
  error = signal<string | null>(null);

  // För att filtrera sökresultat, startvärde tomt
  filterCourses = signal("");

  // För att sortera kurserna desc och asc efter kod, namn och progression startvärde false
  sortName = signal(false);
  sortCode = signal(false);
  sortProgression = signal(false);

  // Vilken sortering som används där null är startvärde, alltså ingen sortering
  sortType = signal<"code" | "name" | "progression" | null>(null);

  // Sortering efter kurskod
  sortByCode(): void {
    this.sortType.set("code"); // När man klickar på kurskod (html) så används metoden
    this.sortCode.set(!this.sortCode()); // Switchar mellan true och false
  }

  // Sortering efter kursnamn
  sortByName(): void {
    this.sortType.set("name") // När man klickar på kursnamn (html) så används metoden
    this.sortName.set(!this.sortName()); // Switchar mellan true och false
  }

  // Sortering efter progression
  sortByProgression(): void {
    this.sortType.set("progression") // När man klickar på progression (html) så används metoden
    this.sortProgression.set(!this.sortProgression()); // Switchar mellan true och false
  }

  // Constructor som initieras när data hämtas för att använda till eventuella felmeddelanden
  constructor() {
    effect(() => {
      const data = this.courses(); // Data som hämtas in från webbtjänsten
      if (data.length === 0) { // Om inget data hämtats så sätts ett felmeddelande
        this.error.set("Ingen data för kurser kunde hämtas. Försök igen senare.");
      } else {
        this.error.set(null); // Annars återgår felmeddelandet till null, alltså tomt meddelande
      }
    });
  }

  filteredResults = computed(() => {
    // Lagrar alla kurser inom results för att kunna använda till filtrering/sortering
    let results = [...this.courses()];

    // Filtrering, användarens sökfras inom input
    const searchPhrase = this.filterCourses().trim().toLowerCase();

    // Om något skrivits
    if (searchPhrase) {
      // Filtrerar efter kurskod och namn
      results = results.filter(result =>
        result.code.toLowerCase().includes(searchPhrase) ||
        result.coursename.toLowerCase().includes(searchPhrase)
      );
    }

    // Sorteringslogik
    // Ser över vilken metod som ska användas för sortering
    const activeType = this.sortType();

    // Om användaren inte har klickat på någon metoden så returneras de vanliga posterna av kurser
    if (!activeType) return results;

    // Använder olika metoder med switch beroende på vilken sortering som användaren klickat på
    switch (activeType) {
      case "code": // För kurskod
        // Switchar mellan att sortera stigande eller fallande beroende på om den är true eller false vilket ändras emellan när användaren klickar på kurskoden i html
        results.sort((a, b) => this.sortCode() ? a.code.localeCompare(b.code) : b.code.localeCompare(a.code));
        break;

      case "name": // För kursnamn
        // Switch stigande/fallande för kursnamn
        results.sort((a, b) => this.sortName() ? a.coursename.localeCompare(b.coursename) : b.coursename.localeCompare(a.coursename));
        break;

      case "progression": // För progression
        // Switch stigande/fallande för progression
        results.sort((a, b) => this.sortProgression() ? a.progression.localeCompare(b.progression) : b.progression.localeCompare(a.progression));
        break;

      // Om ingen sortering gjorts/klickats så används den vanliga ordningen för kurserna
      default: case null:
        return results;
    }
    // Returnerar den slutliga listan av kurser som filtrerad/sorterad/osorterad
    return results;
  });
}
