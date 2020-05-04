import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { HotItem } from './hotitem';
import { HOTLIST } from './hotlist';
import { SelectCikkService } from '../services/select-cikk.service';

@Component({
  selector: 'web-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {
  @Input() hasAction = true;
  hotlist = HOTLIST;

  constructor(private router: Router, private selectCikkService: SelectCikkService) { }

  ngOnInit() {
  }

  goToDetails(cikk: HotItem ) {
    this.selectCikkService.selectedItem = cikk;
    this.router.navigate(['/cikk']);
  }

}