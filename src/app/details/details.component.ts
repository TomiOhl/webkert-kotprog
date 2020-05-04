import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Movie } from '../movie/movie';
import { Car } from '../cars/car';
import { Techitem } from '../tech/techitem';

@Component({
  selector: 'web-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() inData: Movie | Car | Techitem;
  @Output() callSelectPage = new EventEmitter<string>();
  constructor() { }

  onSelectCikk(event: string) {
    // router redirect this.page = event;
    alert('selected:' + event);
  }

}
