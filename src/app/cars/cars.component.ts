import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { CARS } from './cars';
import { GameAddComponent } from './add/game-add.component';
import { MatDialog } from '@angular/material/dialog';
import { SelectCikkService } from '../services/select-cikk.service';
import { Car } from './car';


@Component({
  selector: 'web-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = CARS;

  constructor(private dialog: MatDialog, private router: Router, private selectCikkService: SelectCikkService) { }

  openDialog() {
    const dialogRef = this.dialog.open(GameAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.cars.push(result);
      }
    });
  }

  goToDetails(cikk: Car ) {
    this.selectCikkService.selectedItem = cikk;
    this.router.navigate(['/cikk']);
  }

}
