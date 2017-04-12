"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var film_service_1 = require("./film.service");
var router_2 = require("@angular/router");
var ReturnComponent = (function () {
    function ReturnComponent(filmService, route, location, router) {
        this.filmService = filmService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.rent = 10;
        this.delay = 0;
        this.unrewindedTape = false;
        this.brokenTape = false;
        this.resume = 0;
    }
    ReturnComponent.prototype.setUnrewindedTape = function () {
        if (this.unrewindedTape === false) {
            this.resume = this.resume + 10;
            this.unrewindedTape = true;
        }
        else {
            this.resume = this.resume - 10,
                this.unrewindedTape = false;
        }
    };
    ReturnComponent.prototype.setBrokenTape = function () {
        if (this.brokenTape === false) {
            this.resume = this.resume + 100;
            this.brokenTape = true;
        }
        else {
            this.resume = this.resume - 100,
                this.brokenTape = false;
        }
    };
    return ReturnComponent;
}());
ReturnComponent = __decorate([
    core_1.Component({
        selector: 'return',
        templateUrl: './return.component.html',
        styleUrls: ['./return.component.css']
    }),
    __metadata("design:paramtypes", [film_service_1.FilmService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_2.Router])
], ReturnComponent);
exports.ReturnComponent = ReturnComponent;
//# sourceMappingURL=return.component.js.map