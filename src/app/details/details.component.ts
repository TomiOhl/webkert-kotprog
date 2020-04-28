import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Movie } from '../movie/movie';
import { Game } from '../game/game';

@Component({
  selector: 'web-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() inData: Movie | Game;
  @Output() callSelectPage = new EventEmitter<string>();
  constructor() { }

  onSelectCikk(event: string) {
    // router redirect this.page = event;
    alert('selected:' + event);
  }

}
