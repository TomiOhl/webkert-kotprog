import { Component, OnInit, Input } from '@angular/core';
import { Techitem } from './techitem';

@Component({
  selector: 'web-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  @Input() tech: Techitem;

  constructor() { }

  ngOnInit() {
  }

}
