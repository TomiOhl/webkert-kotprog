import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
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
import { GameComponent } from './game/game.component';
import { DetailsComponent } from './details/details.component';
import { GameAddComponent } from './game/add/game-add.component';
import { OnHoverDirective } from './directives/on-hover.directive';
import { TechComponent } from './tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    OnHoverDirective,
    MovieComponent,
    NavComponent,
    GameComponent,
    DetailsComponent,
    GameAddComponent,
    TechComponent
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
    GameAddComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
