import { Component, OnInit, ViewChild} from '@angular/core';
import {Http, Headers} from '@angular/http';

import { BridgeApi} from '../bridge.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  headers = new Headers({'Content-Type': 'application/json'});
  obs = this.http.post('https://bridge-auction-app.herokuapp.com/',
   JSON.stringify(this.bridgeApi.bid), { headers: this.headers});
  @ViewChild('f') bridgeForm: NgForm;
  defaultSuit = 'Spades';
  defaultNum = 1;
onSubmit() {
  this.bridgeApi.saveBid(this.bridgeForm.value.numericBid,
    this.bridgeForm.value.suitBid,
     this.bridgeForm.value.comments);
     console.log(this.bridgeApi.bid);
     this.bridgeForm.reset();
     this.obs.subscribe();
}
  constructor(public bridgeApi: BridgeApi, private http: Http) {

   }

  ngOnInit() {
  }

}
