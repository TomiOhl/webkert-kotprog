import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'web-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {
  form: FormGroup;
  constructor(private dialogRef: MatDialogRef<GameAddComponent>) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl(''),
      description: new FormControl('')
    });
  }

}
