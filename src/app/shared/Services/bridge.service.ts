import { Card } from './card.model';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class BridgeApi {
  constructor(public http: HttpClient) { }
  submitted = false;
  bid = {
    hand: [],
    hcp: 0,
    numbid: '',
    suit: '',
    comment: ''
  };
  hcp: number;
  answer = '';
  answerStatus = false;
  coinFlip() {
    return (Math.random() < 0.5 ? 0 : 1);
  }
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
      // suits are ordered alphabetically, from weakest to strongest. This is why this sort is viable.
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
    // this is glitchy. There is no 100% working sort algorithm for all broswers. Return 0 is not defined so this works only if
    // no element is equal to any of the rest
    array.sort(
      (a, b) => {
        const value1 = a.value;
        const value2 = b.value;
        if (value1 < value2) {
          return 1;
        } else {
          return -1;
        }
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
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.bid);
    this.submitted = true;
    return this.http.post('https://bridge-auction-app.herokuapp.com/addauction', body, { headers: header })
      .map(
        (response: any) => response.result
      ).catch(
        (error) => Observable.throw(error.json())
      );
  }
  toPracticeCollection() {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(this.bid);
    this.submitted = true;
    return this.http.post('https://bridge-auction-app.herokuapp.com/addpracticebid', body, { headers: header })
      .map(
        (response: any) => response.result
      ).catch(
        (error) => Observable.throw(error)
      );
  }
  fetchHand() {
    return this.http.get('https://bridge-auction-app.herokuapp.com/randomhand').map(
      (response: any) => response.result
    ).catch(
      (error) => Observable.throw(error)
    );
  }
  fetchPractice() {
    return this.http.get('https://bridge-auction-app.herokuapp.com/getpracticehand').map(
      (response: any) => response.result
    ).catch(
      (error) => Observable.throw(error)
    );
  }
  fetchleadPractice() {
    return this.http.get('https://bridge-auction-app.herokuapp.com/getrandomleadpractice').map(
      (response: any) => response.result
    ).catch(
      (error) => Observable.throw(error)
    );
  }
  postComment(id, answer) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const ans = {
      id: id,
      answer: answer
    };
    const body = JSON.stringify(ans);
    return this.http.post('https://bridge-auction-app.herokuapp.com/postleadanswer', body, { headers: header }).map(
      (response: any) => response.result
    ).catch(
      (error) => Observable.throw(error)
    );
  }
}
