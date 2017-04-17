// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement } from '@angular/core';

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


import { FilmDetailComponent } from "../filmDetailComponent/film-detail.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ReturnComponent } from "../returnComponent/return.component";
import { FilmService } from "../filmService/film.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ActivatedRouteStub, RouterStub } from "../testing/router-stubs";
import { SpyLocation } from "../testing/spyLocation";
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Film } from "../film/film";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";


describe('film details component test', () => {
  let comp: FilmDetailComponent;
  let fixture: ComponentFixture<FilmDetailComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  let filmServiceStub = {
    getFilm() {
      let film = new Film();
      film.id = 7;
      film.name = 'Pulp Fiction';
    }
  }

  //spyOn(comp,'OnInit').and.callFake(()=>comp.film = this.film);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [FilmDetailComponent, ReturnComponent],
      providers: [{ provide: Location, useClass: SpyLocation }]
    }).overrideComponent(FilmDetailComponent, {
      add: {
        providers: [{ provide: FilmService, useValue: filmServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Router, useClass: RouterStub }
        ]
      }
    })
      .compileComponents();
  }))

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetailComponent], // declare the test component
    });
    fixture = TestBed.createComponent(FilmDetailComponent);
    comp = fixture.componentInstance;
    spyOn(comp, 'ngOnInit').and.callFake(() => comp.film = this.film);
    comp.film = new Film();

    fixture.detectChanges();
  })


  it('component be defined', () => {
    expect(comp).toBeDefined();
  });

})