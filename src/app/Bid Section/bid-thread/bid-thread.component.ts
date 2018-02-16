import { Component, OnInit, HostBinding } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BridgeApi } from '../../shared/Services/bridge.service';
import { Card } from '../../shared/Services/card.model';
import { User } from '../../shared/Services/user.service';
import { routeFadeStateTrigger } from '../../shared/animations/animations';
@Component({
  selector: 'app-bid-thread',
  templateUrl: './bid-thread.component.html',
  styleUrls: ['./bid-thread.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class BidThreadComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;
  handInitialized = false;
  isLoading = false;
  bids = [];
  newHand = false;
  buttonText = 'Initialize Hand';
  hcp: number;
  cardsArray: Card[];
  spades: Card[];
  hearts: Card[];
  diamonds: Card[];
  clubs: Card[];
  constructor(public bridgeApi: BridgeApi, private http: Http, public user: User) { }
  hand: Card[];
  getHand(array) {
    this.isLoading = true;
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
            (el) => { this.bids.push(el); }
          );
          this.bids.sort(
            (a, b) => {
              const value1 = a.votes;
              const value2 = b.votes;
              return value2 - value1;
            }
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
      let hcpValid = true;
      while (hcpValid) {
        this.hand = this.bridgeApi.initializeHand(array);
        this.spades = this.bridgeApi.filterArray(this.hand, 'Spades');
        this.spades = this.bridgeApi.sortArrayValues(this.spades);
        this.hearts = this.bridgeApi.filterArray(this.hand, 'Hearts');
        this.hearts = this.bridgeApi.sortArrayValues(this.hearts);
        this.diamonds = this.bridgeApi.filterArray(this.hand, 'Diamonds');
        this.diamonds = this.bridgeApi.sortArrayValues(this.diamonds);
        this.clubs = this.bridgeApi.filterArray(this.hand, 'Clubs');
        this.clubs = this.bridgeApi.sortArrayValues(this.clubs);
        this.hand = this.bridgeApi.fixHcp(this.hand);
        this.hand = this.spades.concat(this.hearts).concat(this.clubs).concat(this.diamonds);
        console.log(this.hand);
        let sum = 0;
        this.hand.forEach(
          (el) => {
            sum = el.value + sum;
          }
        );
        this.hcp = sum;
        if (this.hcp > 10) {
          hcpValid = false;
          this.handInitialized = true;
        } else {
          array = this.bridgeApi.deck();
        }
      }
      this.bridgeApi.saveHand(this.hand, this.hcp);
      console.log(this.bridgeApi.bid);
    }
    this.cardsArray = this.bridgeApi.deck();
    this.isLoading = false;
    this.buttonText = 'Fetch another hand';
  }
  ngOnInit() {
    this.cardsArray = this.bridgeApi.deck();
  }
}
