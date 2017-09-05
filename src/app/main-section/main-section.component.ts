import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BridgeApi } from '../bridge.service';
import { Card } from '../card.model';
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  call: boolean;
  handInitialized = false;
  bids= [];
  newHand= false;
  hcp: number;
  cardsArray: Card[];
  spades: Card[];
  hearts: Card[];
  diamonds: Card[];
  clubs: Card[];
  constructor(public bridgeApi: BridgeApi, private http: Http) { }
  hand: Card[];
  fixHcp(array: Card[]) {
    array.forEach(element => {
      if (element.value >= 10) {
        element.value = element.value % 10 + 1;
      } else {
        element.value = 0;
      }
    });
    return array;
  }
  getHand(array) {
    this.bridgeApi.submitted = false;
    const coin = this.bridgeApi.coinFlip();
    this.bids = [];
    if (coin) {
      this.bridgeApi.fetchHand().subscribe(
        (results) => {
          console.log('This is an existing hand', results);
          this.newHand = false;
          this.hand = results[0].array;
          this.hcp = results[0].hcp;
          results.forEach(
            ( el ) => { this.bids.push(el); }
          );
          this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
          this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
          this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
          this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
          this.handInitialized = true;
          this.bridgeApi.saveHand(this.hand, this.hcp);
          console.log(this.bridgeApi.bid);
        }
      );
    } else {
      this.newHand = true;
      this.bids = [];
      this.hand = this.bridgeApi.initializeHand(array);
      this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
      this.bridgeApi.sortArrayValues(this.spades);
      this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
      this.bridgeApi.sortArrayValues(this.hearts);
      this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
      this.bridgeApi.sortArrayValues(this.diamonds);
      this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
      this.bridgeApi.sortArrayValues(this.clubs);
      this.handInitialized = true;
      this.hand = this.fixHcp(this.hand);
      this.hand = this.spades.concat(this.hearts).concat(this.clubs).concat(this.diamonds);
      console.log(this.hand);
      let sum = 0;
      this.hand.forEach(
        (el) => {
          sum = el.value + sum;
        }
      );
      this.hcp = sum;
      this.bridgeApi.saveHand(this.hand, this.hcp);
      console.log(this.bridgeApi.bid);
    }
    this.cardsArray = this.bridgeApi.deck();
  }
  ngOnInit() {
    this.cardsArray = this.bridgeApi.deck();
  }
}
