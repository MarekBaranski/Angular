"use strict";
var return_component_1 = require("../returnComponent/return.component");
var testing_1 = require("@angular/core/testing");
var film_service_1 = require("../filmService/film.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
describe('FilmsComponent', function () {
    var comp;
    var fixture;
    var el;
    var el2;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, http_1.HttpModule],
            declarations: [return_component_1.ReturnComponent],
            providers: [film_service_1.FilmService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(return_component_1.ReturnComponent);
        comp = fixture.componentInstance;
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should test setUnrewindedTape', function () {
        comp.setUnrewindedTape();
        expect(comp.resume).toEqual(10);
    });
    it('should test setBrokenTape', function () {
        comp.setBrokenTape();
        expect(comp.resume).toEqual(100);
    });
    it('should test resume with setBrokenTape', function () {
        comp.setBrokenTape();
        expect(comp.resume + comp.rent).toEqual(110);
    });
    it('should test resume with setUnrewindedTape', function () {
        comp.setUnrewindedTape();
        expect(comp.resume + comp.rent).toEqual(20);
    });
    it('should test total resume', function () {
        comp.setUnrewindedTape();
        comp.setBrokenTape();
        expect(comp.resume + comp.rent).toEqual(120);
    });
});
//# sourceMappingURL=return.component.spec.js.map