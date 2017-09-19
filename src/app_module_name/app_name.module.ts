import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { DesignModule } from '../design/design.module';

import { AppNameComponent } from './app_name.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: ''}
];


@NgModule({
    imports: [
        BrowserAnimationsModule,
        RouterModule.forRoot(APP_ROUTES, { useHash: true }),

        DesignModule
    ],
    declarations: [
        AppNameComponent,
        HomeComponent,
        AboutComponent
    ]
})
export class AppNameModule {}
