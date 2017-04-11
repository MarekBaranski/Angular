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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var film_service_1 = require("./film.service");
var film_1 = require("./film");
require("rxjs/add/operator/switchMap");
var FilmDetailComponent = (function () {
    function FilmDetailComponent(filmService, route, location) {
        this.filmService = filmService;
        this.route = route;
        this.location = location;
    }
    FilmDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.filmService.getFilm(+params['id']); })
            .subscribe(function (film) { return _this.film = film; });
    };
    FilmDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    FilmDetailComponent.prototype.save = function () {
        var _this = this;
        this.filmService.update(this.film)
            .then(function () { return _this.goBack(); });
    };
    FilmDetailComponent.prototype.lendFalse = function (film) {
        this.filmService.changeStatusOnFalse(film);
    };
    FilmDetailComponent.prototype.lendTrue = function (film) {
        this.filmService.changeStatusOnTrue(film);
    };
    return FilmDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", film_1.Film)
], FilmDetailComponent.prototype, "film", void 0);
FilmDetailComponent = __decorate([
    core_1.Component({
        selector: 'film-detail',
        templateUrl: './film-detail.component.html',
        styleUrls: ['./film-detail.component.css']
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        router_1.ActivatedRoute,
        common_1.Location])
], FilmDetailComponent);
exports.FilmDetailComponent = FilmDetailComponent;
//# sourceMappingURL=film-detail.component.js.map