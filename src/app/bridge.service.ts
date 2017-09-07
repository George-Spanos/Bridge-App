import { Card } from './card.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class BridgeApi {
  constructor(public http: Http) { }
  submitted= false;
  bid = {
    hand: [],
    hcp: 0,
    numbid: '',
    suit: '',
    comment: ''
  };
  hcp: number;
  coinFlip() {
    return (Math.random() < 0.5 ? 0 : 1);
  }
  deck() {
    const names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    const cards = [];
    for (let s = 0; s < suits.length; s++) {
      for (let n = 0; n < names.length; n++) {
        cards.push(new Card(n + 1, names[n], suits[s]));
      }
    }
    return cards;
  }
  initializeHand(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    const shuffledArray = array.slice(0, 13);
    shuffledArray.sort((a, b) => {
      const suit1 = a.suit;
      const suit2 = b.suit;
      if (suit1 > suit2) {
        return -1;
      }
      if (suit1 < suit2) {
        return 1;
      }
      return 0;
    });
    return shuffledArray;
  }
  sortArrayValues(array) {
    array.sort(
      (a, b) => {
        const value1 = a.value;
        const value2 = b.value;
        if (value1 < value2) {
          return 1;
        }
        if (value2 > value2) {
          return -1;
        }
        return 0;
      }
    ); return array;
  }
  filterArray(array: Card[], condition: string) {
    const newArray = array.filter(
      (el) => {
        return el.suit === condition;
      }
    );
    return newArray;
  }
  saveHand(hand: Card[], hcp: number) {
    this.bid.hand = hand;
    this.bid.hcp = hcp;
  }
  saveBid(no: string, suit: string, comment: string) {
    this.bid.comment = comment;
    this.bid.numbid = no;
    this.bid.suit = suit;
  }
  toDatabase() {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.bid);
    this.submitted = true;
    return this.http.post('https://bridge-auction-app.herokuapp.com/addauction', body, { headers: header })
      .map(
      (response: Response) => { response.json(); }
      ).catch(
      (error: Response) => Observable.throw(error.json())
      );
  }
  toPracticeCollection() {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.bid);
    return this.http.post('https://bridge-auction-app.herokuapp.com/addpracticebid', body, { headers: header })
      .map(
      (response: Response) => { response.json(); }
      ).catch(
      (error: Response) => Observable.throw(error.json())
      );
  }
  fetchHand() {
    return this.http.get('/randomhand').map(
      (response: Response) => response.json().result
    ).catch(
      (error: Response) => Observable.throw(error.json())
      );
  }
}
