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
    'SouthBid': [
      {
        'bidComment': ' Dummy Text 4',
        'suitBid': 'NoTrump',
        'numBid': '2'
      },
      {
        'bidComment': 'Dummy Text 3 ',
        'suitBid': '',
        'numBid': 'Pass'
      }
    ],
    'EastBid': [
      {
        'bidComment': 'Dummy Text',
        'suitBid': '',
        'numBid': 'Pass'
      },
      {
        'bidComment': 'Dummy Text 2',
        'suitBid': '',
        'numBid': 'Pass'
      }
    ],
    'NorthBid': [
      {
        'bidComment': 'Dummy Text',
        'suitBid': '',
        'numBid': 'Pass'
      },
      {
        'bidComment': 'Dummy Text',
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
  }[];
  North: {
    bidComment: String,
    suitBid: String,
    numBid: String
  }[];
  South: {
    bidComment: String,
    suitBid: String,
    numBid: String
  }[];
  West: {
    bidComment: String,
    suitBid: String,
    numBid: String
  }[];
  lead: Card;
  leadClicked: boolean;
  hand: Card[];
  spades: Card[];
  hearts: Card[];
  clubs: Card[];
  diamonds: Card[];
  answerValid: boolean;
  answerComment: string;
  answerSubmitted: boolean;
  startPractice() { }
  noHover() {

  }
  chooseLead(lead: Card) {
    this.lead = lead;
    this.leadClicked = true;
  }
  submitLead() {
    this.answerSubmitted = true;
    if (this.lead.name === this.dummyLead.lead.name && this.lead.suit === this.dummyLead.lead.suit) {
      this.answerValid = true;
      this.answerComment = 'Your answer was correct';
    } else {
      this.answerValid = false;
      this.answerComment = 'Your answer was incorrect';
    }
  }
  constructor(public bridgeApi: BridgeApi) { }

  ngOnInit() {
    this.East = this.dummyLead.EastBid;
    this.North = this.dummyLead.NorthBid;
    this.South = this.dummyLead.SouthBid;
    this.West = this.dummyLead.WestBid;
    this.hand = this.dummyLead.hand;
    this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
    this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
    this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
    this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
    this.leadClicked = false;
    this.answerValid = false;
    this.answerSubmitted = false;
  }

}
