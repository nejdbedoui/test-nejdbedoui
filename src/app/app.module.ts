import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LesfilmsComponent } from './allFilms/lesfilms/lesfilms.component';
import { FilmComponent } from './allFilms/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    LesfilmsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
