import { Component, OnInit } from '@angular/core';
import {Film} from './film';
import { FilmService} from './film.service';
import { Router} from '@angular/router';


@Component({
  selector: 'my-rent',
  templateUrl: './rentfilm.component.html',
  styleUrls: ['./rentfilm.component.css'],
    providers: [FilmService]
})
export class RentfilmComponent implements OnInit {
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

  gotoReturn(): void {
    this.router.navigate(['/return', this.selectedFilm.id]);
  }


  add(name: string, category: string, director: string, year: number): void {
    name = name.trim();
    category = category.trim();
    director = director.trim();
    if (!name) { return; }
    if (!category) { return; }
    if (!director) { return; }
    if (!year) { return; }
    this.filmService.create(name, category, director, year)
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


    // console.log(this.films);
   // this.sort = sort;
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
