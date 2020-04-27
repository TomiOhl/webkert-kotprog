import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'web-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() callSelectPage = new EventEmitter<string>();
  constructor() { }
}
