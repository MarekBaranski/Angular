"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
var app_routing_module_1 = require("../appRouting/app-routing.module");
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("../inMemoryDataService/in-memory-data.service");
var app_component_1 = require("../appComponent/app.component");
var film_detail_component_1 = require("../filmDetailComponent/film-detail.component");
var films_component_1 = require("../filmsComponent/films.component");
var film_service_1 = require("../filmService/film.service");
var rent_component_1 = require("../rentComponent/rent.component");
var rentfilm_component_1 = require("../rentFilmComponent/rentfilm.component");
var film_search_component_1 = require("../filmSearchComponent/film-search.component");
var film_edit_component_1 = require("../filmEditComponent/film-edit.component");
var search_component_1 = require("../searchComponent/search.component");
var return_component_1 = require("../returnComponent/return.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            rent_component_1.RentComponent,
            film_detail_component_1.FilmDetailComponent,
            films_component_1.FilmsComponent,
            rentfilm_component_1.RentfilmComponent,
            film_search_component_1.FilmSearchComponent,
            film_edit_component_1.FilmEditComponent,
            search_component_1.SearchComponent,
            return_component_1.ReturnComponent
        ],
        providers: [
            film_service_1.FilmService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map