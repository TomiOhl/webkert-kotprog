import { Component, OnInit } from '@angular/core';
import { HOTLIST } from '../hot/hotlist';
import { CARS } from '../cars/cars';
import { TECHLIST } from '../tech/techlist';

@Component({
  selector: 'web-popularlist',
  templateUrl: './popularlist.component.html',
  styleUrls: ['./popularlist.component.css']
})
export class PopularlistComponent implements OnInit {
popular = [];
car = CARS;
hot = HOTLIST;
tech = TECHLIST;

  constructor() {
    // csinalunk egy tombot a harom kategoriabol, sortoljuk desc views szerint, majd levagjuk az elso 5 elemet
    this.popular = this.car.concat(this.hot).concat(this.tech);
    this.popular.sort((a, b) => (a.views > b.views) ? -1 : 1);
    this.popular = this.popular.slice(0, 5);
  }

  ngOnInit() {
  }

}
