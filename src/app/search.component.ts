import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { FilmService } from './film.service';
import {Film} from './film';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
@Input() film: Film;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.filmService.getFilm(+params['id']))
      .subscribe(film => this.film = film);
  }
   lendFalse(film: Film): void {
  this.filmService.changeStatusOnFalse(film);

  }

  lendTrue(film: Film): void {
  this.filmService.changeStatusOnTrue(film);

  }


}
