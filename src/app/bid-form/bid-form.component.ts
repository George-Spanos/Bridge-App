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
  @ViewChild('f') bridgeForm: NgForm;
  defaultSuit = 'Spades';
  defaultNum = 1;
onSubmit() {
  this.bridgeApi.saveBid(this.bridgeForm.value.numericBid,
    this.bridgeForm.value.suitBid,
     this.bridgeForm.value.comments);
     console.log(this.bridgeApi.bid);

     this.bridgeApi.toDatabase().subscribe(
       (data) => {console.log(data); },
       (error) => {console.error(error); }
     );
          this.bridgeForm.reset();
}
  constructor(public bridgeApi: BridgeApi, private http: Http) {

   }

  ngOnInit() {
  }

}
