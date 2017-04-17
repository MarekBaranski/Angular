"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("../appComponent/app.component");
var testing_2 = require("@angular/router/testing");
describe('AppComponent (inline template)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(testing_1.async(function () {
        // TestBed.compileComponents();
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
            imports: [testing_2.RouterTestingModule],
            providers: [] // declare the test component
        }).compileComponents();
    }));
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent],
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance; // AppComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});
// describe('1st tests', () => {
// it('true is true', () => expect(true).toBe(true));
// }); 
//# sourceMappingURL=app.component.spec.js.map