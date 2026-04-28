import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';
import { CourseComponent } from './pages/course/course';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'course', component: CourseComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '404', component: NotFound },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];
