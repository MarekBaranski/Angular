import { Pipe, PipeTransform } from '@angular/core';
import { Film } from './film';

@Pipe({
name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(films: any, term: any): any {

    if( term === undefined ) return films;
    return films.filter(function(film: Film){
      return film.name.toLowerCase().includes(term.toLowerCase());
    })
  }
} 