import { Injectable } from '@angular/core';
import { Car } from '../cars/car';
import { HotItem } from '../hot/hotitem';
import { Techitem } from '../tech/techitem';

@Injectable({
  providedIn: 'root'
})
export class SelectCikkService {
  selectedItem: Car | HotItem | Techitem;

  constructor() {

  }
}
