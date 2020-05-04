import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { MovieComponent } from './movie/movie.component';
import { CarsComponent } from './cars/cars.component';


const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'tech', component: TechComponent },
  { path: 'nsfw', component: MovieComponent },
  { path: '**', component: MovieComponent } // érvénytelen útvonal dobjon a főoldalra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
