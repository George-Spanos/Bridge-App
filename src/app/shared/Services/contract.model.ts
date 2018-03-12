import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from './card.model';

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
@Injectable()
export class Contract {
  colors: {};
  East: {
    bidComment: String,
    suitBid: String,
    numBid: String
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
  Hand: Card[];
  lead: Card;
  comments: string;
  constructor(public http: HttpClient) {
    this.North = [];
    this.East = [];
    this.South = [];
    this.West = [];
    this.Hand = [];
  }
  changeValue(name: string, obj: FormControl) {
    if (name === 'North') {
      this.North.push(obj.value);
      console.log(this.North);
    } else if (name === 'South') {
      this.South.push(obj.value);
      console.log(this.South);
    } else if (name === 'West') {
      this.West.push(obj.value);
      console.log(this.West);
    } else if (name === 'East') {
      this.East.push(obj.value);
      console.log(this.East);
    }
  }
  leadtoDatabase() {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const leadObj = {
      colors: this.colors,
      lead: this.lead,
      hand: this.Hand,
      comments: this.comments,
      North: this.North,
      East: this.East,
      South: this.South,
      West: this.West
    };
    const body = JSON.stringify(leadObj);
    return this.http.post('https://bridge-auction-app.herokuapp.com/addlead', body, { headers: header })
      .map(
      (response: any) => response.result
      ).catch(
      (error) => Observable.throw(error)
      );
  }
}

