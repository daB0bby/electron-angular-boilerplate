import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DesignModule } from './design/design.module';
import { CoreModule } from './core/core.module';
import { AppNameModule } from './app_module_name/app_name.module';

import { AppNameComponent } from './app_module_name/app_name.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,

        DesignModule,
        CoreModule,
        AppNameModule
    ],
    declarations: [],
    bootstrap: [ AppNameComponent ]
})
export class AppModule {}
