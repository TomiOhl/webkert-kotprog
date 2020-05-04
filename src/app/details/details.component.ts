import { Component, Output, EventEmitter, Input } from '@angular/core';
import {Router} from '@angular/router';
import { HotItem } from '../hot/hotitem';
import { Car } from '../cars/car';
import { Techitem } from '../tech/techitem';
import { SelectCikkService } from '../services/select-cikk.service';

@Component({
  selector: 'web-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  inData: Car | HotItem | Techitem;

  constructor(private router: Router, private selectCikkService: SelectCikkService) {
    this.inData = this.selectCikkService.selectedItem;
  }

}
