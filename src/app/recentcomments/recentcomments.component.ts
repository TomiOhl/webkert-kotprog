import { Component, OnInit } from '@angular/core';
import { COMMENTS } from '../comments/comments';

@Component({
  selector: 'web-recentcomments',
  templateUrl: './recentcomments.component.html',
  styleUrls: ['./recentcomments.component.css']
})
export class RecentcommentsComponent implements OnInit {
comments = COMMENTS;

  constructor() { }

  ngOnInit() {
  }

}
