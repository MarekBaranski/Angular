"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var film_service_1 = require("../filmService/film.service");
var router_1 = require("@angular/router");
var RentfilmComponent = (function () {
    function RentfilmComponent(filmService, router) {
        this.filmService = filmService;
        this.router = router;
        this.title = 'Wypozyczalnia kaset VHS';
        this.sort = 'id';
    }
    RentfilmComponent.prototype.getFilms = function () {
        var _this = this;
        this.filmService.getFilms().then(function (films) { return _this.films = films; });
    };
    RentfilmComponent.prototype.ngOnInit = function () {
        this.getFilms();
    };
    RentfilmComponent.prototype.onSelect = function (film) {
        this.selectedFilm = film;
    };
    RentfilmComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedFilm.id]);
    };
    RentfilmComponent.prototype.gotoEdit = function () {
        this.router.navigate(['/edit', this.selectedFilm.id]);
    };
    RentfilmComponent.prototype.gotoReturn = function () {
        this.router.navigate(['/return', this.selectedFilm.id]);
    };
    RentfilmComponent.prototype.add = function (name, category, director, year) {
        var _this = this;
        name = name.trim();
        category = category.trim();
        director = director.trim();
        if (!name) {
            return;
        }
        if (!category) {
            return;
        }
        if (!director) {
            return;
        }
        if (!year) {
            return;
        }
        this.filmService.create(name, category, director, year)
            .then(function (film) {
            _this.films.push(film);
            _this.selectedFilm = null;
        });
    };
    RentfilmComponent.prototype.delete = function (film) {
        var _this = this;
        this.filmService
            .delete(film.id)
            .then(function () {
            _this.films = _this.films.filter(function (f) { return f !== film; });
            if (_this.selectedFilm === film) {
                _this.selectedFilm = null;
            }
        });
    };
    RentfilmComponent.prototype.sortByArgument = function (sort) {
        if (sort == 'film.name') {
            this.films = this.films.sort(this.sortByTitle);
        }
        if (sort == 'film.category') {
            this.films = this.films.sort(this.sortByCategory);
        }
        // console.log(this.films);
        // this.sort = sort;
    };
    RentfilmComponent.prototype.sortByTitle = function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name == b.name) {
            return 0;
        }
        return -1;
    };
    RentfilmComponent.prototype.sortByCategory = function (a, b) {
        if (a.category > b.category) {
            return 1;
        }
        if (a.category == b.category) {
            return 0;
        }
        return -1;
    };
    return RentfilmComponent;
}());
RentfilmComponent = __decorate([
    core_1.Component({
        selector: 'my-rent',
        templateUrl: './rentfilm.component.html',
        styleUrls: ['./rentfilm.component.css'],
        providers: [film_service_1.FilmService]
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        router_1.Router])
], RentfilmComponent);
exports.RentfilmComponent = RentfilmComponent;
//# sourceMappingURL=rentfilm.component.js.map