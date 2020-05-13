import { Injectable } from '@angular/core';
import { Car } from '../cars/car';
import { HotItem } from '../hot/hotitem';
import { Techitem } from '../tech/techitem';

@Injectable({
  providedIn: 'root'
})
export class SelectCikkService {
  private selectedItem: Car | HotItem | Techitem;

  constructor() {
    this.selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
  }

  public getSelectedItem() {
    return this.selectedItem;
  }

  public setSelectedItem(cikk: Car | HotItem | Techitem) {
    this.selectedItem = cikk;
    localStorage.setItem('selectedItem', JSON.stringify(cikk));
  }

}
