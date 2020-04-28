import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from './movie';
import { MOVIES } from './movies';

@Component({
  selector: 'web-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() hasAction = true;
  @Output() getMovie = new EventEmitter<Movie>();
  movies = MOVIES;
  detailData: any;

  constructor() { }

  ngOnInit() {
  }

  goToDetails(event: Movie ) {
    this.detailData = event;
    // router redirect this.page = 'details';
  }

}
