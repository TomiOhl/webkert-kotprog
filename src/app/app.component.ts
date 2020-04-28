import { Component } from '@angular/core';
import { CATEGORIES } from './category/categories';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = CATEGORIES;

  constructor() { }

}
