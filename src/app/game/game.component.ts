import { Component, OnInit, Input } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'web-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  @Input() game: Game;

  constructor() { }

}
