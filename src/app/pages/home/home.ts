import { Component } from '@angular/core';
import { CourseComponent } from '../course/course';

@Component({
  selector: 'app-home',
  imports: [CourseComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
