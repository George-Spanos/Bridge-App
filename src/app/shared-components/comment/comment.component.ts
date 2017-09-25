import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() votes: number;
  @Input() link: string;
  votevalue = 0;
  Upvote() {
    // return this.http;
    if (this.votevalue < 1) {
      this.votes += 1;
      this.votevalue += 1;
    }
  }
  Downvote() {
    // return this.http;
    if (this.votevalue > -1) {
      this.votes -= 1;
      this.votevalue -= 1;
    }
  }
  constructor(public http: Http) { }

  ngOnInit() {
    this.votes = 5;
  }

}
