import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpHeaders, HttpClient } from '@angular/common/http';
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
  @Input() link: string;
  bid: {
    value: Number,
    id: String,
    index?: Number
  };
  @Input() index: number;
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
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.bid = {
      value: value,
      id: this.id,
      index: this.index
    };
    const body = JSON.stringify(this.bid);
    return this.http.post(this.link, body, { headers: header }).map(
      (response: any) =>  response.result
    ).catch(
      (error) => Observable.throw(error)
      );
  }
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

}
