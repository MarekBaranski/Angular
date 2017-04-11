import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let films = [
    { id: 1, name: 'Kiler 2', category: 'komedia', director: 'Juliusz Machulski', year: '1999', status:true, image: "1.jpg" },
    { id: 2, name: 'Leon Zawodowiec', category: 'sensacyjny', director: 'Luc Besson', year: '1994', status:false, image: "2.jpg"},
    { id: 3, name: 'Krol Lew', category: 'animowany', director: 'Roger Allers', year: '1994', status:false, image: "3.jpg"},
    { id: 4, name: 'Pulp Fiction', category: 'fabularny', director: 'Quentin Tarantino', year: '1994', status:true, image: "4.jpg"},
    { id: 5, name: 'Titanic', category: 'dramat', director: 'James Cameron', year: '1998', status:true, image: "5.jpg"},
    { id: 6, name: 'Matrix', category: 'fantasy', director: 'Lana Wachowski, Lilly Wachowski', year: '1999', status:true, image: "6.jpg"},
    { id: 7, name: 'Terminator 2', category: 'fantasy', director: 'James Cameron', year: '1991', status:true, image: "7.jpg"},
    { id: 8, name: 'Edwar Nozycoreki', category: 'fantasy', director: 'Tim Burton', year: '1990', status:false, image: "8.jpg"},
    { id: 9, name: 'Psy', category: 'dramat', director: 'Władysław Pasikowski', year: '1992', status:false, image: "9.jpg"},
    { id: 10, name: 'Truman Show', category: 'fantasy', director: 'Peter Weir', year: '1998', status:true, image: "10.jpg"},
    { id: 11, name: 'Dlug', category: 'dramat', director: 'Krzysztof Krauze', year: '1999', status:true, image: "11.jpg"},
    { id: 12, name: 'Kiler', category: 'komedia', director: 'Juliusz Machulski', year: '1997', status:true, image: "12.jpg"},
    { id: 13, name: 'Szosty Zmysl', category: 'dramat', director: 'M. Night Shyamalan', year: '1999', status:true, image: "13.jpg"},
    { id: 14, name: 'American Beauty', category: 'dramat', director: 'Sam Mendes', year: '1999', status:true, image: "14.jpg"},
    { id: 15, name: 'Zielona Mila', category: 'fantasy', director: 'Frank Darabont', year: '1999', status:true, image: "15.jpg"},
    { id: 16, name: 'Park Jurajski', category: 'fantasy', director: 'Steven Spielberg', year: '1993', status:false, image: "16.jpg"},
    { id: 17, name: 'Szeregowiec Ryan', category: 'dramat', director: 'Steven Spielberg', year: '1998', status:false, image: "17.jpg"},
    { id: 18, name: 'Psy2', category: 'sensacyjny', director: 'Władysław Pasikowski', year: '1994', status:true, image: "18.jpg"},
    { id: 19, name: 'Drakula', category: 'fantasy', director: 'Francis Ford Coppola', year: '1992', status:true, image: "19.jpg"},
    { id: 20, name: 'Cube', category: 'thriller', director: 'Vincenzo Natali', year: '1997', status:true, image: "20.jpg"}
    ];
    return {films};
  }
}
