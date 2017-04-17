import { DebugElement } from "@angular/core";
import { FilmService } from "../filmService/film.service";
import { ComponentFixture, async, TestBed, tick } from "@angular/core/testing";
import { ReflectiveInjector } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FilmsComponent } from "../filmsComponent/films.component";
import { By } from "@angular/platform-browser";
import { Film } from "../film/film";
import { FormsModule } from "@angular/forms";
import { fakeAsync } from "@angular/core/testing";
import { Router, ActivatedRoute } from '@angular/router';
import { FilmSearchComponent } from '../filmSearchComponent/film-search.component';
import { FilmDetailComponent } from '../filmDetailComponent/film-detail.component';
import { ReturnComponent } from '../returnComponent/return.component';
import { HttpModule } from "@angular/http";
import { RouterLinkStubDirective, RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from "../testing/router-stubs";
import { SpyLocation } from "../testing/spyLocation";


describe('FilmsComponent', () => {
    let de: DebugElement[];
    let de2: DebugElement[];
    let comp: FilmsComponent;
    let fixture: ComponentFixture<FilmsComponent>;
    let el: HTMLElement;
    let el2: HTMLElement;
    let filmService: FilmService;
    let FILMS: Film[];
    beforeEach(async(() => {
        TestBed.configureTestingModule
            ({
                imports: [FormsModule, HttpModule],
                declarations: [FilmsComponent, FilmSearchComponent,  FilmDetailComponent,ReturnComponent, RouterLinkStubDirective, RouterOutletStubComponent],
                providers: [FilmService,{provide:Router, useClass:RouterStub},{provide:ActivatedRoute, useClass:ActivatedRouteStub}, { provide: Location, useClass: SpyLocation } ]

            })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FilmsComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.queryAll(By.css('div'));
        el = de[0].nativeElement;
        filmService = fixture.debugElement.injector.get(FilmService);
        FILMS = [
            { id: 1, name: 'Kiler 2', category: 'komedia', director: 'Juliusz Machulski', year: 1999, status:true, image: "1.jpg" },
            { id: 6, name: 'Matrix', category: 'fantasy', director: 'Lana Wachowski, Lilly Wachowski', year: 1999, status:true, image: "6.jpg"},
            { id: 7, name: 'Terminator 2', category: 'fantasy', director: 'James Cameron', year: 1991, status:true, image: "7.jpg"},
            { id: 9, name: 'Psy', category: 'dramat', director: 'Władysław Pasikowski', year: 1992, status:false, image: "9.jpg"},
        ];
        spyOn(filmService, 'getFilms').and.returnValue(Promise.resolve(FILMS));
        comp.selectedFilm= new Film();
        comp.selectedFilm.id=1;
     

    });
    it('should create component', () => expect(comp).toBeDefined());
    it('should get Films', fakeAsync(() => {
        comp.getFilms();
        tick();
        expect(comp.films).toEqual(FILMS);
    }));
          
});


