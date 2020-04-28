import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category/category';

@Component({
  selector: 'web-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
