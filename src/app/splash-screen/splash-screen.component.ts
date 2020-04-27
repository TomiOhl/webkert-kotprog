import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../category/category';

@Component({
  selector: 'web-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {
  @Input() categories: Category[];
  @Output() callSelectC = new EventEmitter<string>();

  constructor() { }

}
