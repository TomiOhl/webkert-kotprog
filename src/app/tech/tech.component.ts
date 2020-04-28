import { Component, OnInit } from '@angular/core';
import { TECHLIST } from './techlist';

@Component({
  selector: 'web-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  techlist = TECHLIST;

  constructor() { }

  ngOnInit() {
  }

}
