import { Component, effect, inject, signal } from '@angular/core';
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
}
