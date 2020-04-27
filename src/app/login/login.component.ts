import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() callSelectPage = new EventEmitter<string>();
  constructor() { }
}
