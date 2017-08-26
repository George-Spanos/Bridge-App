import {Card} from './card.model';
import {Injectable} from '@angular/core';
@Injectable()
export class BridgeApi {

  deck() {
    const names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
    const cards = [];
      for ( let s = 0; s < suits.length; s++ ) {
          for ( let n = 0; n < names.length; n++ ) {
              cards.push(new Card( n + 1, names[n], suits[s] ) );
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
    return array.slice(0, 13);
}
}
