import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { FilmService } from '../filmService/film.service';
import {Film} from '../film/film';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.css']
})

export class FilmEditComponent implements OnInit {
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
  goBack(): void {
    this.location.back();
  }
  save(): void {
  this.filmService.update(this.film)
    .then(() => this.goBack());
}
}
