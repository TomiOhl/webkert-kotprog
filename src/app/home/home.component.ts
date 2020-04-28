import { Component } from '@angular/core';
import { MOVIES } from '../movie/movies';
import { CATEGORIES } from '../category/categories';
import { Movie } from '../movie/movie';
import { GAMES } from '../game/games';
import { Game } from '../game/game';
import { MatDialog } from '@angular/material/dialog';
import { GameAddComponent } from '../game/add/game-add.component';
import { TECHLIST } from '../tech/techlist';

@Component({
  selector: 'web-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = CATEGORIES;
  movies = MOVIES;
  games = GAMES;
  techlist = TECHLIST;
  favorites = [];
  category = '';
  page = '';
  detailData: any;

  constructor(private dialog: MatDialog) { }

  onSelect(event: string) {
    this.category = event;
  }

  onFavorite(event: Movie) {
    if (event && event.star) {
      this.favorites.push(event);
    }
    this.favorites = this.favorites.filter(favorite => favorite.star);
  }

  onSelectPage(event: string) {
    this.page = event;
  }

  goToDetails(event: Movie | Game) {
    this.detailData = event;
    this.page = 'details';
  }

  openDialog() {
    const dialogRef = this.dialog.open(GameAddComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.title) {
        this.games.push(result);
      }
    });
  }
}
