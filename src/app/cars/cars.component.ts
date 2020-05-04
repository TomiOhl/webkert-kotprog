import { Component } from '@angular/core';
import { CARS } from './cars';
import { GameAddComponent } from './add/game-add.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'web-car',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars = CARS;

  constructor(private dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(GameAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.cars.push(result);
      }
    });
  }

}
