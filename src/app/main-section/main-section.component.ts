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
  fixHcp(array: Card[]) {
    array.forEach(element => {
      if (element.value >= 10) {
        element.value = element.value % 10 + 1;
      }else {
        element.value = 0;
      }
    });
    return array;
  }
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
  this.hand = this.fixHcp(this.hand);
  let sum = 0;
  this.hand.forEach(
    (el) => {
      sum = el.value + sum;
    }
  );
  this.bridgeApi.saveHand(this.hand, sum);
console.log(this.bridgeApi.bid);
}
  ngOnInit() {
    this.cardsArray = this.bridgeApi.deck();

  }
}
