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
var film_service_1 = require("./film.service");
var router_1 = require("@angular/router");
var FilmsComponent = (function () {
    function FilmsComponent(filmService, router) {
        this.filmService = filmService;
        this.router = router;
        this.title = 'Wypozyczalnia kaset VHS';
        this.sort = 'id';
    }
    FilmsComponent.prototype.getFilms = function () {
        var _this = this;
        this.filmService.getFilms().then(function (films) { return _this.films = films; });
    };
    FilmsComponent.prototype.ngOnInit = function () {
        this.getFilms();
    };
    FilmsComponent.prototype.onSelect = function (film) {
        this.selectedFilm = film;
    };
    FilmsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedFilm.id]);
    };
    FilmsComponent.prototype.gotoEdit = function () {
        this.router.navigate(['/edit', this.selectedFilm.id]);
    };
    FilmsComponent.prototype.add = function (name, category, director, year) {
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
    FilmsComponent.prototype.delete = function (film) {
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
    FilmsComponent.prototype.sortByArgument = function (sort) {
        if (sort == 'film.name') {
            this.films = this.films.sort(this.sortByTitle);
        }
        if (sort == 'film.category') {
            this.films = this.films.sort(this.sortByCategory);
        }
    };
    FilmsComponent.prototype.sortByTitle = function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name == b.name) {
            return 0;
        }
        return -1;
    };
    FilmsComponent.prototype.sortByCategory = function (a, b) {
        if (a.category > b.category) {
            return 1;
        }
        if (a.category == b.category) {
            return 0;
        }
        return -1;
    };
    return FilmsComponent;
}());
FilmsComponent = __decorate([
    core_1.Component({
        selector: 'my-films',
        templateUrl: './films.component.html',
        styleUrls: ['./films.component.css'],
        providers: [film_service_1.FilmService]
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        router_1.Router])
], FilmsComponent);
exports.FilmsComponent = FilmsComponent;
//# sourceMappingURL=films.component.js.map