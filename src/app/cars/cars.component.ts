import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARS } from './cars';
import { SelectCikkService } from '../services/select-cikk.service';
import { Car } from './car';


@Component({
  selector: 'web-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = CARS;

  constructor(private router: Router, private selectCikkService: SelectCikkService) { }

  goToDetails(cikk: Car ) {
    this.selectCikkService.setSelectedItem(cikk);
    this.router.navigate(['/cikk']);
  }

}
