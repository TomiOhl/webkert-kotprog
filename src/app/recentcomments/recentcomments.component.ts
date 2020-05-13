import { Component, OnInit } from '@angular/core';
import { COMMENTS } from '../comments/comments';

@Component({
  selector: 'web-recentcomments',
  templateUrl: './recentcomments.component.html',
  styleUrls: ['./recentcomments.component.css']
})
export class RecentcommentsComponent implements OnInit {
comments = COMMENTS;
orderedcomments = [];

  constructor() {
    this.comments.forEach(val => this.orderedcomments.push(Object.assign({}, val)));
    this.orderedcomments = this.orderedcomments.reverse().slice(0, 5);
  }

  ngOnInit() {
  }

}
