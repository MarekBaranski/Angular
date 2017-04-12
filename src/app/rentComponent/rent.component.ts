import { Component, OnInit } from '@angular/core';

import { Film } from '../film/film';
import { FilmService } from '../filmService/film.service';

@Component({
  selector: 'my-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css'] 
})
export class RentComponent implements OnInit {

  films: Film[] = [];

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms()
      .then(films => this.films = films.slice(1, 5));
  }
}
