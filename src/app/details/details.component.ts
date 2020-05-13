import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HotItem } from '../hot/hotitem';
import { Car } from '../cars/car';
import { Techitem } from '../tech/techitem';
import { SelectCikkService } from '../services/select-cikk.service';
import { COMMENTS } from '../comments/comments';
import { CommentItem } from '../comments/commentitem';

@Component({
  selector: 'web-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  inData: Car | HotItem | Techitem;
  comments = COMMENTS;
  orderedcomments = [];
  form: FormGroup;

  constructor(private router: Router, private selectCikkService: SelectCikkService) {
    this.inData = this.selectCikkService.getSelectedItem();
    this.comments.forEach(val => this.orderedcomments.push(Object.assign({}, val)));
    this.orderedcomments.reverse();
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      cikk: new FormControl(this.inData.title),
      user: new FormControl(''),
      content: new FormControl('')
    });
  }

  onSubmit(newComment: CommentItem) {
    COMMENTS.push(newComment);
    this.orderedcomments.unshift(newComment);
    this.form.reset();
    this.initForm();
  }

}
