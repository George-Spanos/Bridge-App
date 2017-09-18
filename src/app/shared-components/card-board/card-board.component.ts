import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Card } from '../../Services/card.model';
import { BridgeApi } from '../../Services/bridge.service';
@Component({
  selector: 'app-card-board',
  templateUrl: './card-board.component.html',
  styleUrls: ['./card-board.component.css']
})
export class CardBoardComponent implements OnInit, OnChanges {
  @Input() Initialized: boolean;
  @Input() cards: Card[];
  spades: Card[];
  hearts: Card[];
  diamonds: Card[];
  clubs: Card[];
  constructor(private bridgeApi: BridgeApi) { }

  ngOnInit() { }
  ngOnChanges() {
    if (this.Initialized) {
      this.spades = this.bridgeApi.filterArray(this.cards, 'Spades');
      this.hearts = this.bridgeApi.filterArray(this.cards, 'Hearts');
      this.diamonds = this.bridgeApi.filterArray(this.cards, 'Diamonds');
      this.clubs = this.bridgeApi.filterArray(this.cards, 'Clubs');
    }
  }
}
