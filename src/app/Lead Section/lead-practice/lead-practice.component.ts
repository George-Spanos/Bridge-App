import { Component, OnInit, HostBinding } from '@angular/core';

import { Card } from '../../shared/Services/card.model';
import { BridgeApi } from '../../shared/Services/bridge.service';
import { routeFadeStateTrigger } from '../../shared/animations/animations';
@Component({
  selector: 'app-lead-practice',
  templateUrl: './lead-practice.component.html',
  styleUrls: ['./lead-practice.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class LeadPracticeComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;
  handInitialized = true;
  isLoading = false;
  buttonText = 'Start Practising';
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
  Colors: {
    colorWest: String,
    colorSouth: String,
    colorEast: String,
    colorNorth: String
  };
  leadClicked = false;
  hand: Card[];
  spades: Card[];
  hearts: Card[];
  clubs: Card[];
  diamonds: Card[];
  answerComment: string;
  start = false;
  answerValid = false;
  answerSubmitted = false;
  comments: string;
  startPractice() {
    this.isLoading = true;
    this.bridgeApi.fetchleadPractice().subscribe(
      (result) => {
        this.answerSubmitted = false;
        this.leadClicked = false;
        this.start = true;
        this.Colors = result.colors;
        this.correctlead = result.lead;
        this.comments = result.comments;
        this.East = result.EastBid;
        this.North = result.NorthBid;
        this.South = result.SouthBid;
        this.West = result.WestBid;
        this.East.forEach(
          (el) => { el.hover = false; }
        );
        this.North.forEach(
          (el) => { el.hover = false; }
        );
        this.South.forEach(
          (el) => { el.hover = false; }
        );
        this.West.forEach(
          (el) => { el.hover = false; }
        );
        this.hand = result.hand;
        this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
        this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
        this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
        this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
        this.buttonText = 'Fetch another practice hand';
      }
    );
    this.isLoading = false;
  }
  chooseLead(lead: Card) {
    this.lead = lead;
    this.leadClicked = true;
  }
  submitLead() {
    this.answerSubmitted = true;
    if (this.lead.name === this.correctlead.name && this.lead.suit === this.correctlead.suit) {
      this.answerValid = true;
      this.answerComment = 'Your answer was correct';
    } else {
      this.answerValid = false;
      this.answerComment = 'Your answer was incorrect';
    }
  }
  constructor(public bridgeApi: BridgeApi) { }

  ngOnInit() { }
}
