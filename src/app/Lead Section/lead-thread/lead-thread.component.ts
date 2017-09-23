import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../../Services/card.model';
import { BridgeApi } from '../../Services/bridge.service';
@Component({
  selector: 'app-lead-thread',
  templateUrl: './lead-thread.component.html',
  styleUrls: ['./lead-thread.component.css']
})
export class LeadThreadComponent implements OnInit {
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
  comments: String[];
  chooseLead(lead: Card) {
    this.lead = lead;
    this.leadClicked = true;
  }
  constructor(public bridgeApi: BridgeApi) { }
  startLeading() {
    this.bridgeApi.fetchleadPractice().subscribe(
      (result) => {
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
        this.comments = result.answer.comments;
        this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
        this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
        this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
        this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
      });
  }
  ngOnInit() {
  }
}
