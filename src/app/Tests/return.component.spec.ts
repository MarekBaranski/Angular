import { ReturnComponent } from "../returnComponent/return.component";
import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { FilmService } from "../filmService/film.service";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

describe('FilmsComponent', () => {
 
    
    let comp: ReturnComponent;
    let fixture: ComponentFixture<ReturnComponent>;
    let el: HTMLElement;
    let el2: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule
            ({
                imports: [FormsModule, HttpModule],
                declarations: [ReturnComponent],
                providers: [FilmService ]

            })
            .compileComponents();
    }))

beforeEach(() => {
        fixture = TestBed.createComponent(ReturnComponent);
        comp = fixture.componentInstance;

    });
     it('should create component', () => expect(comp).toBeDefined());


     it('should test setUnrewindedTape', () =>{
         comp.setUnrewindedTape();
         expect(comp.resume).toEqual(10);
     });
     
     it('should test setBrokenTape', () =>{
         comp.setBrokenTape();
         expect(comp.resume).toEqual(100);
     });

      
     it('should test resume with setBrokenTape', () =>{
         comp.setBrokenTape();
         expect(comp.resume+comp.rent).toEqual(110);
     });

      
     it('should test resume with setUnrewindedTape', () =>{
         comp.setUnrewindedTape();
         expect(comp.resume+comp.rent).toEqual(20);
     });

      it('should test total resume', () =>{
         comp.setUnrewindedTape();
         comp.setBrokenTape();
         expect(comp.resume+comp.rent).toEqual(120);
     });
} );