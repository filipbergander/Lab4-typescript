import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: 'hem', component: Home },
    { path: '', redirectTo: 'hem', pathMatch: 'full' },
    { path: '404', component: NotFound },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];
