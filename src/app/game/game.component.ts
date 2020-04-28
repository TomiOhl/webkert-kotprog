import { Component } from '@angular/core';
import { GAMES } from './games';
import { GameAddComponent } from './add/game-add.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'web-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  games = GAMES;

  constructor(private dialog: MatDialog) { }


  openDialog() {
    const dialogRef = this.dialog.open(GameAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.games.push(result);
      }
    });
  }

}
