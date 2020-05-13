import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { CarsComponent } from './cars/cars.component';
import { HotComponent } from './hot/hot.component';
import { NsfwComponent } from './nsfw/nsfw.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: HotComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'tech', component: TechComponent },
  { path: 'nsfw', component: NsfwComponent },
  { path: 'cikk', component: DetailsComponent },
  { path: '**', component: HotComponent } // érvénytelen útvonal dobjon a főoldalra
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
