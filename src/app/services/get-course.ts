import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../interface/course';

@Injectable({
  providedIn: 'root',
})
export class GetCourse {
  url: string = 'https://webbutveckling.miun.se/files/ramschema.json';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
