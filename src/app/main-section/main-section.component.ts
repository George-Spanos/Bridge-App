import { Component, OnInit } from '@angular/core';
import { BridgeApi} from '../bridge.service';
import { Card } from '../card.model';
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  handInitialized = false;
  cardsArray: Card[];
  spades: Card[];
  hearts: Card[];
  diamonds: Card[];
  clubs: Card[];
  constructor( public bridgeApi: BridgeApi) { }
  hand: Card[];
getHand(array) {
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
}
  ngOnInit() {
    this.cardsArray = this.bridgeApi.deck();
  }
}
