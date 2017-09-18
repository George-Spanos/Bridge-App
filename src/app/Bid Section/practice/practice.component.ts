import { Component, OnInit } from '@angular/core';
import { Card } from '../../Services/card.model';
import { BridgeApi } from '../../Services/bridge.service';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  handInitialized = false;
  spades: Card[];
  hearts: Card[];
  clubs: Card[];
  diamonds: Card[];
  hand: Card[];
  hcp: number;
  comment: string;
  correctbid: string;
  startPractice() {
    this.bridgeApi.answerStatus = false;
    this.bridgeApi.answer = '';
    this.bridgeApi.fetchPractice().subscribe(
      (results) => {
        this.hand = results.array;
        this.hcp = results.hcp;
        this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
        this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
        this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
        this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
        this.comment = results.comments;
        this.correctbid = results.numericBid + ' ' + results.suitBid;
        this.handInitialized = true;
        console.log( this.comment, this.correctbid);
      }
    );
  }
  constructor(public bridgeApi: BridgeApi) { }

  ngOnInit() {
  }

}
