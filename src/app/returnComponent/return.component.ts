import { Component, Input, OnInit } from '@angular/core';

import { FilmService } from '../filmService/film.service';
import { Film } from '../film/film';

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})

export class ReturnComponent {
  rent: number;
  delay: number;
  unrewindedTape: boolean;
  brokenTape: boolean;
  resume: number;


  constructor(//private filmService: FilmService,
    ) {
    this.rent = 10;
      this.delay = 0;
      this.unrewindedTape = false;
      this.brokenTape = false;
      this.resume = 0;
  }

  setUnrewindedTape(): void {
    if (this.unrewindedTape === false) {
      this.resume = this.resume + 10;
      this.unrewindedTape = true;
    }
    else {
    this.resume = this.resume-10,
      this.unrewindedTape = false;
    }

  }
  setBrokenTape(): void {
    if (this.brokenTape === false) {
      this.resume = this.resume + 100;
      this.brokenTape = true;
    }
    else {
    this.resume = this.resume-100,
      this.brokenTape = false;
    }

  }


}
