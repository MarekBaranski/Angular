import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from '../appRouting/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../inMemoryDataService/in-memory-data.service';


import { AppComponent }  from '../appComponent/app.component';
import { FilmDetailComponent } from '../filmDetailComponent/film-detail.component';
import { FilmsComponent } from '../filmsComponent/films.component';
import { FilmService } from '../filmService/film.service';
import { RentComponent }  from '../rentComponent/rent.component';
import { RentfilmComponent } from '../rentFilmComponent/rentfilm.component';
import { FilmSearchComponent } from '../filmSearchComponent/film-search.component';
import { FilmEditComponent } from '../filmEditComponent/film-edit.component';
import { SearchComponent }  from '../searchComponent/search.component';
import { ReturnComponent }  from '../returnComponent/return.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    RentComponent,
    FilmDetailComponent,
    FilmsComponent,
    RentfilmComponent,
    FilmSearchComponent,
    FilmEditComponent,
     SearchComponent,
     ReturnComponent
  ],
  providers: [
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
