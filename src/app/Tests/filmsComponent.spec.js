"use strict";
var film_service_1 = require("../filmService/film.service");
var testing_1 = require("@angular/core/testing");
var common_1 = require("@angular/common");
var films_component_1 = require("../filmsComponent/films.component");
var platform_browser_1 = require("@angular/platform-browser");
var film_1 = require("../film/film");
var forms_1 = require("@angular/forms");
var testing_2 = require("@angular/core/testing");
var router_1 = require("@angular/router");
var film_search_component_1 = require("../filmSearchComponent/film-search.component");
var film_detail_component_1 = require("../filmDetailComponent/film-detail.component");
var return_component_1 = require("../returnComponent/return.component");
var http_1 = require("@angular/http");
var router_stubs_1 = require("../testing/router-stubs");
var spyLocation_1 = require("../testing/spyLocation");
describe('FilmsComponent', function () {
    var de;
    var de2;
    var comp;
    var fixture;
    var el;
    var el2;
    var filmService;
    var FILMS;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, http_1.HttpModule],
            declarations: [films_component_1.FilmsComponent, film_search_component_1.FilmSearchComponent, film_detail_component_1.FilmDetailComponent, return_component_1.ReturnComponent, router_stubs_1.RouterLinkStubDirective, router_stubs_1.RouterOutletStubComponent],
            providers: [film_service_1.FilmService, { provide: router_1.Router, useClass: router_stubs_1.RouterStub }, { provide: router_1.ActivatedRoute, useClass: router_stubs_1.ActivatedRouteStub }, { provide: common_1.Location, useClass: spyLocation_1.SpyLocation }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(films_component_1.FilmsComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.queryAll(platform_browser_1.By.css('div'));
        el = de[0].nativeElement;
        filmService = fixture.debugElement.injector.get(film_service_1.FilmService);
        FILMS = [
            { id: 1, name: 'Kiler 2', category: 'komedia', director: 'Juliusz Machulski', year: 1999, status: true, image: "1.jpg" },
            { id: 6, name: 'Matrix', category: 'fantasy', director: 'Lana Wachowski, Lilly Wachowski', year: 1999, status: true, image: "6.jpg" },
            { id: 7, name: 'Terminator 2', category: 'fantasy', director: 'James Cameron', year: 1991, status: true, image: "7.jpg" },
            { id: 9, name: 'Psy', category: 'dramat', director: 'Władysław Pasikowski', year: 1992, status: false, image: "9.jpg" },
        ];
        spyOn(filmService, 'getFilms').and.returnValue(Promise.resolve(FILMS));
        comp.selectedFilm = new film_1.Film();
        comp.selectedFilm.id = 1;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should get Films', testing_2.fakeAsync(function () {
        comp.getFilms();
        testing_1.tick();
        expect(comp.films).toEqual(FILMS);
    }));
});
//# sourceMappingURL=filmsComponent.spec.js.map