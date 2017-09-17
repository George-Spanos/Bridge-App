import { Component, OnInit } from '@angular/core';

import { Card } from '../../Services/card.model';
import { BridgeApi } from '../..//Services/bridge.service';
@Component({
  selector: 'app-lead-practice',
  templateUrl: './lead-practice.component.html',
  styleUrls: ['./lead-practice.component.css']
})
export class LeadPracticeComponent implements OnInit {
  dummyLead = {
    'colors': {
      'colorWest': 'Green',
      'colorSouth': 'Green',
      'colorEast': 'Green',
      'colorNorth': 'Green'
    },
    'comments': 'Leading a major seems better at this sequence.',
    'lead': {
      'suit': 'Hearts',
      'name': '2',
      'value': 1,
      'clicked': true
    },
    'WestBid': [
      {
        'bidComment': 'Hello',
        'suitBid': '',
        'numBid': 'Pass'
      },
      {
        'bidComment': '',
        'suitBid': '',
        'numBid': 'Pass'
      }
    ],
    'SouthBid': [
      {
        'bidComment': '',
        'suitBid': 'Hearts',
        'numBid': '2'
      },
      {
        'bidComment': ' hello hello hello hello hello hello',
        'suitBid': '',
        'numBid': 'Pass'
      }
    ],
    'EastBid': [
      {
        'bidComment': '',
        'suitBid': '',
        'numBid': 'Pass'
      },
      {
        'bidComment': '',
        'suitBid': '',
        'numBid': 'Pass'
      }
    ],
    'NorthBid': [
      {
        'bidComment': '',
        'suitBid': '',
        'numBid': 'Pass'
      },
      {
        'bidComment': '',
        'suitBid': 'NoTrump',
        'numBid': '3'
      }
    ],
    'hand': [
      {
        'suit': 'Spades',
        'name': '8',
        'value': 7,
        'clicked': true
      },
      {
        'suit': 'Spades',
        'name': '6',
        'value': 5,
        'clicked': true
      },
      {
        'suit': 'Hearts',
        'name': 'J',
        'value': 10,
        'clicked': true
      },
      {
        'suit': 'Hearts',
        'name': '9',
        'value': 8,
        'clicked': true
      },
      {
        'suit': 'Hearts',
        'name': '3',
        'value': 2,
        'clicked': true
      },
      {
        'suit': 'Hearts',
        'name': '2',
        'value': 1,
        'clicked': true
      },
      {
        'suit': 'Diamonds',
        'name': 'Q',
        'value': 11,
        'clicked': true
      },
      {
        'suit': 'Diamonds',
        'name': '5',
        'value': 4,
        'clicked': true
      },
      {
        'suit': 'Diamonds',
        'name': '4',
        'value': 3,
        'clicked': true
      },
      {
        'suit': 'Diamonds',
        'name': '3',
        'value': 2,
        'clicked': true
      },
      {
        'suit': 'Clubs',
        'name': 'A',
        'value': 13,
        'clicked': true
      },
      {
        'suit': 'Clubs',
        'name': '10',
        'value': 9,
        'clicked': true
      },
      {
        'suit': 'Clubs',
        'name': '2',
        'value': 1,
        'clicked': true
      }
    ],
  };
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
  this.bridgeApi.fetchleadPractice().subscribe(
    (result) => {
      this.answerSubmitted = false;
      this.leadClicked = false;
      this.start = true;
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
    }
  );
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

ngOnInit() {}
}