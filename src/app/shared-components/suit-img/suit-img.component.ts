import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suit-img',
  templateUrl: './suit-img.component.html',
  styleUrls: ['./suit-img.component.css']
})
export class SuitImgComponent implements OnInit {
  @Input() suit: string;
  spades = false;
  hearts = false;
  clubs = false;
  diamonds = false;
  nt = false;
  constructor() { }

  ngOnInit() {
    if (this.suit === 'Spades') {
      this.spades = true;
    } else if (this.suit === 'Hearts') {
      this.hearts = true;
    } else if (this.suit === 'Diamonds') {
      this.diamonds = true;
    } else if (this.suit === 'Clubs') {
      this.clubs = true;
    }else if (this.suit === 'NoTrump') {
      this.nt = true;
    }
  }

}
