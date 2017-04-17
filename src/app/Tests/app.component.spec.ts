import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { AppComponent } from "../appComponent/app.component";
import { FilmsComponent } from "../filmsComponent/films.component";
import { FilmDetailComponent } from "../filmDetailComponent/film-detail.component";
import { FilmService } from "../filmService/film.service";

import { RouterTestingModule } from '@angular/router/testing'; 


describe('AppComponent (inline template)', () => {

  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  

    beforeEach(async(() => {
    // TestBed.compileComponents();
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [] // declare the test component
    }).compileComponents();
  })); 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // AppComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });



it('should display original title', () => {
  fixture.detectChanges();
  expect(el.textContent).toContain(comp.title);
});

it('should create component', () => expect(comp).toBeDefined()); 

it('should display a different test title', () => {
  comp.title = 'Test Title';
  fixture.detectChanges();
  expect(el.textContent).toContain('Test Title');
});





});








// describe('1st tests', () => {
// it('true is true', () => expect(true).toBe(true));
// }); 
