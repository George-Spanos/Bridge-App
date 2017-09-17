import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contract-design',
  templateUrl: './contract-design.component.html',
  styleUrls: ['./contract-design.component.css']
})
export class ContractDesignComponent implements OnInit {
  hover = false;
  @Input() North: {
    bidComment: String,
    suitBid: String,
    numBid: String,
  };
  @Input() East: {
    bidComment: String,
    suitBid: String,
    numBid: String,
  };
  @Input() West: {
    bidComment: String,
    suitBid: String,
    numBid: String,
  };
  @Input() South: {
    bidComment: String,
    suitBid: String,
    numBid: String,
  };
  onHover(element) {
    element.hover = !element.hover;
  }
  constructor() { }

  ngOnInit() {
  }

}
