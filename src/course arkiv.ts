/*import { Component, effect, inject, signal } from '@angular/core';
import { CourseService } from './app/services/get-course';
import { toSignal } from '@angular/core/rxjs-interop';
import { Course } from './app/interface/course';

@Component({
  selector: 'app-course',

  imports: [],
  templateUrl: './course.html',
  styleUrl: './course.scss',
})
export class CourseComponent {
  // Property som lagrar kurserna enligt interfacet(course), startvärde en tom array
  //courses = signal<Course[]>([]);
  courseService = inject(CourseService);
  
  courses = this.courseService.fetchCourses();
  // Felmeddelanden om det inte skulle gå att hämta kurserna
  //error = signal<string | null>(null);
  // courses = toSignal(this.courseService.fetchCourses(), {});
  /* constructor(private courseService: CourseService) {
     this.courses = toSignal(this.courseService.fetchCourses(), {
       initialValue: [],
     })
   }*/
  /*

 

  Courses = toSignal(this.courseService.fetchCourses(),
    { initialValue: [] });

  constructor() {
    effect(() => {
      console.table(this.Courses());
    })
  }*/

  // Hämtar kurserna genom metoden loadCourses när allt har initierats
  /*ngOnInit() {
    this.loadCourses();
  }
 
 
  async loadCourses() {
    try {
      const response = await this.courseService.fetchCourses();
      this.Courses.set(response);
    } catch (error) {
      this.error.set("Kurserna kunde inte laddas in, försök igen senare.");
    }
  }
}*/
