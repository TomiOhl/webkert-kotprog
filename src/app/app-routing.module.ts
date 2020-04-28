import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { MovieComponent } from './movie/movie.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'game', component: GameComponent },
  { path: 'favorite', component: MovieComponent },
  { path: 'tech', component: TechComponent },
  { path: 'nsfw', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
