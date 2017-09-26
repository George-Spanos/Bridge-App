import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() votes: number;
  @Input() id: string;
  votevalue = 0;
  value: number;
  Upvote() {
    if (this.votevalue < 1) {
      this.votes += 1;
      this.votevalue += 1;
      this.value = 1;
      this.Vote(this.value).subscribe();
    }
  }
  Downvote() {
    if (this.votevalue > -1) {
      this.votes -= 1;
      this.votevalue -= 1;
      this.value = -1;
      this.Vote(this.value).subscribe();
    }
  }
  Vote(value) {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const bid = {
      value: value,
      id: this.id
    };
    const body = JSON.stringify(bid);
    return this.http.post('/bidvote', body, { headers: header }).map(
      (response: Response) => { response.json(); }
    ).catch(
      (error: Response) => Observable.throw(error.json())
      );

  }
  constructor(public http: Http) { }

  ngOnInit() {
  }

}
