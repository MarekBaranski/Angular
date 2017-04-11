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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var FilmService = (function () {
    function FilmService(http) {
        this.http = http;
        this.filmsUrl = 'api/films'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    FilmService.prototype.getFilms = function () {
        return this.http.get(this.filmsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FilmService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    FilmService.prototype.getFilm = function (id) {
        var url = this.filmsUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FilmService.prototype.update = function (film) {
        var url = this.filmsUrl + "/" + film.id;
        return this.http
            .put(url, JSON.stringify(film), { headers: this.headers })
            .toPromise()
            .then(function () { return film; })
            .catch(this.handleError);
    };
    FilmService.prototype.create = function (name, category, director) {
        return this.http
            .post(this.filmsUrl, JSON.stringify({ name: name, category: category, director: director, status: true }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    FilmService.prototype.delete = function (id) {
        var url = this.filmsUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    FilmService.prototype.changeStatusOnFalse = function (film) {
        var url = this.filmsUrl + "/" + film.id;
        film.status = false;
        return this.http
            .put(url, JSON.stringify(film), { headers: this.headers })
            .toPromise()
            .then(function () { return film; })
            .catch(this.handleError);
    };
    FilmService.prototype.changeStatusOnTrue = function (film) {
        var url = this.filmsUrl + "/" + film.id;
        film.status = true;
        return this.http
            .put(url, JSON.stringify(film), { headers: this.headers })
            .toPromise()
            .then(function () { return film; })
            .catch(this.handleError);
    };
    return FilmService;
}());
FilmService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FilmService);
exports.FilmService = FilmService;
//# sourceMappingURL=film.service.js.map