import { Component, OnInit } from '@angular/core';
import {Film} from './film';
import { FilmService} from './film.service';
import { Router} from '@angular/router';


@Component({
  selector: 'my-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  providers: [FilmService]
})

export class FilmsComponent implements OnInit {
  title = 'Wypozyczalnia kaset VHS';
  films: Film[];
  selectedFilm: Film;
  sort: string = 'id';


  constructor(

    private filmService: FilmService,
    private router: Router) { }



  getFilms(): void {
    this.filmService.getFilms().then(films => this.films = films);
  }

  ngOnInit(): void {

    this.getFilms();
  }

  onSelect(film: Film): void {
    this.selectedFilm = film;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedFilm.id]);
  }

  gotoEdit(): void {
    this.router.navigate(['/edit', this.selectedFilm.id]);
  }


  add(name: string, category: string, director: string): void {
    name = name.trim();
    category = category.trim();
    director = director.trim();
    if (!name) { return; }
    if (!category) { return; }
    if (!director) { return; }
    this.filmService.create(name, category, director)
      .then(film => {
        this.films.push(film);
        this.selectedFilm = null;
      });
  }

  delete(film: Film): void {
    this.filmService
      .delete(film.id)
      .then(() => {
        this.films = this.films.filter(f => f !== film);
        if (this.selectedFilm === film) { this.selectedFilm = null; }
      });
  }

  sortByArgument(sort: string): void {
    if(sort == 'film.name'){
      this.films = this.films.sort(this.sortByTitle);
    }
    if(sort == 'film.category'){
      this.films = this.films.sort(this.sortByCategory);
    }


  }

  sortByTitle(a:Film, b:Film){
    if(a.name > b.name) { return 1; }
    if(a.name == b.name) { return 0; }
    return -1;
  }

  sortByCategory(a:Film, b:Film){
    if(a.category > b.category) { return 1; }
    if(a.category == b.category) { return 0; }
    return -1;
  }
}
