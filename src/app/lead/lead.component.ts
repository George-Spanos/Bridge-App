import { Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

import { BridgeApi } from '../bridge.service';
import { Card } from '../card.model';
import { Contract } from '../contract.model';
@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css'],
  providers: [Contract]
})
export class LeadComponent implements OnInit {
  constructor(private bridgeApi: BridgeApi, public contract: Contract) { }
  @ViewChild('f') contractform: NgForm;
  colors = ['Red', 'Green'];
  deck: Card[];
  spades: Card[];
  hearts: Card[];
  clubs: Card[];
  diamonds: Card[];
  handSpades: Card[];
  handHearts: Card[];
  handDiamonds: Card[];
  handClubs: Card[];
  handSubmitted = false;
  leadSubmitted = false;
  formlog() {
    console.log(this.contractform);
  }
  toSideArray(name: string, el: FormControl) {
    this.contract.setValue(name, el);
  }
  toHand(card: Card) {
    if (this.handSubmitted === false && this.contract.Hand.length < 13) {
      this.contract.Hand.push(card);
      console.log(this.contract.Hand);
    }
  }
  chooseLead(card: Card) {
    this.contract.lead = card;
    console.log('You chose ' + this.contract.lead.name + ' of ' + this.contract.lead.suit + ' as a lead');
    this.leadSubmitted = true;
  }
  submitHand() {
    this.handSpades = this.bridgeApi.filterArray(this.contract.Hand, 'Spades');
    this.handSpades = this.bridgeApi.sortArrayValues(this.handSpades);
    this.handHearts = this.bridgeApi.filterArray(this.contract.Hand, 'Hearts');
    this.handHearts = this.bridgeApi.sortArrayValues(this.handHearts);
    this.handDiamonds = this.bridgeApi.filterArray(this.contract.Hand, 'Diamonds');
    this.handDiamonds = this.bridgeApi.sortArrayValues(this.handDiamonds);
    this.handClubs = this.bridgeApi.filterArray(this.contract.Hand, 'Clubs');
    this.handClubs = this.bridgeApi.sortArrayValues(this.handClubs);
    this.handSubmitted = true;
  }
  onSubmit() {
    this.contract.colors = this.contractform.value.Colors;
    this.contract.comments = this.contractform.value.comments;
    this.contract.contractInfo = this.contractform.value.contractInfo;
    this.contract.leadtoDatabase().subscribe(
      data => console.log('A bid was succesfully sent'),
      error => console.error(error)
    );
    this.contractform.reset();
    this.deck = this.bridgeApi.deck();
    this.spades = this.bridgeApi.filterArray(this.deck, 'Spades');
    this.spades = this.bridgeApi.sortArrayValues(this.spades);
    this.hearts = this.bridgeApi.filterArray(this.deck, 'Hearts');
    this.hearts = this.bridgeApi.sortArrayValues(this.hearts);
    this.diamonds = this.bridgeApi.filterArray(this.deck, 'Diamonds');
    this.diamonds = this.bridgeApi.sortArrayValues(this.diamonds);
    this.clubs = this.bridgeApi.filterArray(this.deck, 'Clubs');
    this.clubs = this.bridgeApi.sortArrayValues(this.clubs);
    this.contract.North = [];
    this.contract.South = [];
    this.contract.East = [];
    this.contract.West = [];
    this.contract.lead = null;
    this.handSubmitted = false;
    this.leadSubmitted = false;
    console.log(this.contract);
  }

  ngOnInit() {
    this.deck = this.bridgeApi.deck();
    this.spades = this.bridgeApi.filterArray(this.deck, 'Spades');
    this.spades = this.bridgeApi.sortArrayValues(this.spades);
    this.hearts = this.bridgeApi.filterArray(this.deck, 'Hearts');
    this.hearts = this.bridgeApi.sortArrayValues(this.hearts);
    this.diamonds = this.bridgeApi.filterArray(this.deck, 'Diamonds');
    this.diamonds = this.bridgeApi.sortArrayValues(this.diamonds);
    this.clubs = this.bridgeApi.filterArray(this.deck, 'Clubs');
    this.clubs = this.bridgeApi.sortArrayValues(this.clubs);
  }

}
