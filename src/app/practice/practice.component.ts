import { Component, OnInit } from '@angular/core';
import { Card } from '../card.model';
import { BridgeApi } from '../bridge.service';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  handInitialized = false;
  spades: Card[];
  hearts: Card[];
  clubs: Card[];
  diamonds: Card[];
  hand: Card[];
  hcp: number;
  startPractice() {
    this.handInitialized = true;
    this.bridgeApi.fetchPractice().subscribe(
      (results) => {
        console.log(results);
        // this.hand = results[0];
      }
    );
  }
  constructor(public bridgeApi: BridgeApi) { }

  ngOnInit() {
  }

}
