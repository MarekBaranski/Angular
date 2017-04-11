"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rent_component_1 = require("./rent.component");
var films_component_1 = require("./films.component");
var film_detail_component_1 = require("./film-detail.component");
var rentfilm_component_1 = require("./rentfilm.component");
var film_edit_component_1 = require("./film-edit.component");
var search_component_1 = require("./search.component");
var routes = [
    { path: '', redirectTo: '/rent', pathMatch: 'full' },
    { path: 'rent', component: rent_component_1.RentComponent },
    { path: 'detail/:id', component: film_detail_component_1.FilmDetailComponent },
    { path: 'films', component: films_component_1.FilmsComponent },
    { path: 'rentfilms', component: rentfilm_component_1.RentfilmComponent },
    { path: 'edit/:id', component: film_edit_component_1.FilmEditComponent },
    { path: 'search/:id', component: search_component_1.SearchComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map