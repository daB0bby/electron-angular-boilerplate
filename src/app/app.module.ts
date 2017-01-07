import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

// Components
import { AppComponent }   from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent }  from './components/home/home.component';

// Routes
import { routing } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
