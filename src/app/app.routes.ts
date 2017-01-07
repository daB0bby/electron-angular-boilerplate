import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent }  from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '*', redirectTo: '/'}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
