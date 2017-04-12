import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { FilmDetailComponent } from './film-detail.component';
import { FilmsComponent } from './films.component';
import { FilmService } from './film.service';
import { RentComponent }  from './rent.component';
import { RentfilmComponent } from './rentfilm.component';
import { FilmSearchComponent } from './film-search.component';
import { FilmEditComponent } from './film-edit.component';
import { SearchComponent }  from './search.component';
import { ReturnComponent }  from './return.component';


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
