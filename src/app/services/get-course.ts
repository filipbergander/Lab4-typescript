import { inject, Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interface/course';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  // Adress till webbtjänsten som lagrar data för kurserna
  private url: string = 'https://webbutveckling.miun.se/files/ramschema.json';

  // Httpclient för att kunna hämta data från webbtjänsten
  http = inject(HttpClient);

  // Hämtar in data från webbtjänsten enligt interfacet, startvärde som en tom array
  fetchCourses(): Signal<Course[]> {
    const courses$ = this.http.get<Course[]>(this.url);
    return toSignal(courses$, { initialValue: [] });
  }
}
