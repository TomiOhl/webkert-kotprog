import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'web-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() hasAction = true;
  @Input() movie: Movie;
  @Output() callFav = new EventEmitter<Movie | null>();
  @Output() getMovie = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }

  toggleStar(event: any) {
    event.stopPropagation();
    this.movie.star = !this.movie.star;
    this.callFav.emit(this.movie);
  }

}
