import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RentComponent }   from '../rentComponent/rent.component';
import { FilmsComponent }      from '../filmsComponent/films.component';
import { FilmDetailComponent }  from '../filmDetailComponent/film-detail.component';
import { RentfilmComponent } from '../rentFilmComponent/rentfilm.component';
import { FilmEditComponent }  from '../filmEditComponent/film-edit.component';
import { SearchComponent }  from '../searchComponent/search.component';
import { ReturnComponent }  from '../returnComponent/return.component';

const routes: Routes = [
  { path: '', redirectTo: '/rent', pathMatch: 'full' },
  { path: 'rent',  component: RentComponent },
  { path: 'detail/:id', component: FilmDetailComponent },
  { path: 'films',     component: FilmsComponent },
  { path: 'rentfilms',     component: RentfilmComponent },
  { path: 'edit/:id',     component: FilmEditComponent },
  { path: 'search/:id',     component: SearchComponent },
   { path: 'return',     component: ReturnComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
