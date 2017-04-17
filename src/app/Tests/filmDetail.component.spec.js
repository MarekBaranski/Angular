// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';
"use strict";
var _this = this;
// import { Component, OnInit } from '@angular/core';
// import { Film } from '../film/film';
// import { FilmService } from '../filmService/film.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule, Http } from '@angular/http';
// import { RouterTestingModule } from '@angular/router/testing';
// import { NgModule } from '@angular/core';
// import { FilmDetailComponent } from '../filmDetailComponent/film-detail.component';
// import { RouterStub, ActivatedRouteStub } from "../testing/router-stubs";
// import { SpyLocation } from "../testing/spyLocation";
// import { ReturnComponent } from "../returnComponent/return.component";
// describe('FilmDetailComponent', () => {
//   let comp: FilmDetailComponent;
//   let fixture: ComponentFixture<FilmDetailComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;
//   let film: Film;
//   film = new Film();
//   film.id = 4;
//   film.status = true;
//   let FilmServiceStub = {
//     getFilms() {
//     },
//     getFilm() {
//     },
//     update(film: Film) {
//     },
//     create(name: string, category: string, director: string, year: number) {
//     },
//     delete(id: number) {
//     },
//     changeStatusOnFalse(film: Film) {
//     },
//     changeStatusOnTrue(film: Film) {
//     }
//   }
//   // film = {
//   //   id: 4,
//   //   name: 'Pulp Fiction',
//   //   category: 'fabularny',
//   //   director: 'Quentin Tarantino',
//   //   year: 1994,
//   //   status: true,
//   //   image: "4.jpg"
//   // };
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [FilmDetailComponent, ReturnComponent],
//       imports: [RouterTestingModule],
//       providers: [{ provide: FilmService, useValue: FilmServiceStub }, { provide: Router, useClass: RouterStub }, { provide: ActivatedRoute, useClass: ActivatedRouteStub }, { provide: Location, useClass: SpyLocation }]
//     }).overrideComponent(FilmDetailComponent, {
//       add:{
//         providers: [{ provide: FilmService, useValue: FilmServiceStub }, { provide: Router, useClass: RouterStub }, { provide: ActivatedRoute, useClass: ActivatedRouteStub }, { provide: Location, useClass: SpyLocation }]
//       }
//     })
//     .compileComponents();
//   }));
//   beforeEach(() => {
//     fixture = TestBed.createComponent(FilmDetailComponent);
//     comp = fixture.componentInstance; // test instance
//     comp.film = film;
//     fixture.detectChanges();
//   });
//   it('component be defined', () => {
//     expect(comp).toBeDefined();
//   });
//   it('should display original component title', () => {
//     de = fixture.debugElement.query(By.css('h2'));
//     el = de.nativeElement;
//     expect(el.textContent).toContain('Pulp Fiction');
//   });
//   it('should display films status available if it is available', () => {
//     de = fixture.debugElement.query(By.css('p'));
//     el = de.nativeElement;
//     expect(el.textContent).toContain("dostępny");
//   });
// });
var film_detail_component_1 = require("../filmDetailComponent/film-detail.component");
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var return_component_1 = require("../returnComponent/return.component");
var film_service_1 = require("../filmService/film.service");
var router_1 = require("@angular/router");
var router_stubs_1 = require("../testing/router-stubs");
var spyLocation_1 = require("../testing/spyLocation");
var common_1 = require("@angular/common");
var film_1 = require("../film/film");
describe('film details component test', function () {
    var comp;
    var fixture;
    var de;
    var el;
    var filmServiceStub = {
        getFilm: function () {
            var film = new film_1.Film();
            film.id = 7;
            film.name = 'Pulp Fiction';
        }
    };
    //spyOn(comp,'OnInit').and.callFake(()=>comp.film = this.film);
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, http_1.HttpModule],
            declarations: [film_detail_component_1.FilmDetailComponent, return_component_1.ReturnComponent],
            providers: [{ provide: common_1.Location, useClass: spyLocation_1.SpyLocation }]
        }).overrideComponent(film_detail_component_1.FilmDetailComponent, {
            add: {
                providers: [{ provide: film_service_1.FilmService, useValue: filmServiceStub },
                    { provide: router_1.ActivatedRoute, useClass: router_stubs_1.ActivatedRouteStub },
                    { provide: router_1.Router, useClass: router_stubs_1.RouterStub }
                ]
            }
        })
            .compileComponents();
    }));
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [film_detail_component_1.FilmDetailComponent],
        });
        fixture = testing_1.TestBed.createComponent(film_detail_component_1.FilmDetailComponent);
        comp = fixture.componentInstance;
        spyOn(comp, 'ngOnInit').and.callFake(function () { return comp.film = _this.film; });
        comp.film = new film_1.Film();
        fixture.detectChanges();
    });
    it('component be defined', function () {
        expect(comp).toBeDefined();
    });
});
//# sourceMappingURL=filmDetail.component.spec.js.map