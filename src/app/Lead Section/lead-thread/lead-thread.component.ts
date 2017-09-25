import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../Services/card.model';
import { BridgeApi } from '../../Services/bridge.service';
@Component({
  selector: 'app-lead-thread',
  templateUrl: './lead-thread.component.html',
  styleUrls: ['./lead-thread.component.css']
})
export class LeadThreadComponent implements OnInit {
  handInitialized = true;
  East: {
    bidComment: String,
    suitBid: String,
    numBid: String,
    hover?: boolean
  }[];
  North: {
    bidComment: String,
    suitBid: String,
    numBid: String,
    hover?: boolean
  }[];
  South: {
    bidComment: String,
    suitBid: String,
    numBid: String,
    hover?: boolean
  }[];
  West: {
    bidComment: String,
    suitBid: String,
    numBid: String,
    hover?: boolean
  }[];
  correctlead: Card;
  lead: Card;
  start = false;
  Colors: {
    colorWest: String,
    colorSouth: String,
    colorEast: String,
    colorNorth: String
  };
  id: string;
  leadClicked: boolean;
  hand: Card[];
  spades: Card[];
  hearts: Card[];
  clubs: Card[];
  diamonds: Card[];
  answers: {
    comments: String,
    lead: {
      suit: String,
      name: String,
      value: Number,
      clicked: Boolean
    },
    votes: Number
  }[];
  chooseLead(lead: Card) {
    this.lead = lead;
    this.leadClicked = true;
  }
  constructor(public bridgeApi: BridgeApi) { }
  startLeading() {
    this.bridgeApi.fetchleadPractice().subscribe(
      (result) => {
        this.bridgeApi.submitted = false;
        this.start = true;
        this.leadClicked = false;
        this.Colors = result.colors;
        this.correctlead = result.lead;
        this.East = result.EastBid;
        this.North = result.NorthBid;
        this.South = result.SouthBid;
        this.West = result.WestBid;
        this.hand = result.hand;
        this.id = result._id;
        this.answers = result.answer;
        this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
        this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
        this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
        this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
      });
  }
  ngOnInit() {
  }
}
