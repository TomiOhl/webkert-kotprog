import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie/movie';

@Component({
  selector: 'web-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() favorite: Movie;
  constructor() { }

  ngOnInit() {
  }

}
