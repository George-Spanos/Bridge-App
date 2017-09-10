import { Component, OnInit } from '@angular/core';
 import {Card} from '../card.model';
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
hcp: number;
startPractice() {
  this.handInitialized = true;
}
  constructor() { }

  ngOnInit() {
  }

}
