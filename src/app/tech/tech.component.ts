import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TECHLIST } from './techlist';
import { SelectCikkService } from '../services/select-cikk.service';
import { Techitem } from './techitem';

@Component({
  selector: 'web-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  techlist = TECHLIST;

  constructor(private router: Router, private selectCikkService: SelectCikkService) { }

  ngOnInit() {
  }

  goToDetails(cikk: Techitem ) {
    this.selectCikkService.setSelectedItem(cikk);
    this.router.navigate(['/cikk']);
  }

}
