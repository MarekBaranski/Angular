import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { FilmService } from './film.service';
import {Film} from './film';
import { Router} from '@angular/router';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})

export class FilmDetailComponent implements OnInit {
@Input() film: Film;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
    private location: Location,
     private router: Router
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
  lendFalse(film: Film): void {
  this.filmService.changeStatusOnFalse(film);

  }

  lendTrue(film: Film): void {
  this.filmService.changeStatusOnTrue(film);

}
 
}
