import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { NavComponent } from './nav/nav.component';
import { MatRippleModule } from '@angular/material/core';
import { DetailsComponent } from './details/details.component';
import { OnHoverDirective } from './directives/on-hover.directive';
import { TechComponent } from './tech/tech.component';
import { CarsComponent } from './cars/cars.component';
import { HotComponent } from './hot/hot.component';
import { PopularlistComponent } from './popularlist/popularlist.component';

@NgModule({
  declarations: [
    AppComponent,
    OnHoverDirective,
    HotComponent,
    NavComponent,
    CarsComponent,
    DetailsComponent,
    TechComponent,
    PopularlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatInputModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule
  ],
  entryComponents: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
