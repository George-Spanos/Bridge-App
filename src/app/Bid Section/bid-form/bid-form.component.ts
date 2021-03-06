import { Component, OnInit, ViewChild } from '@angular/core';

import { BridgeApi } from '../../shared/Services/bridge.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  password: string;
  @ViewChild('f') bridgeForm: NgForm;
  onSubmit() {
    this.bridgeApi.saveBid(
      this.bridgeForm.value.numericBid,
      this.bridgeForm.value.suitBid,
      this.bridgeForm.value.comments);
    console.log(this.bridgeApi.bid);
     this.bridgeApi.toDatabase().subscribe(
       data => console.log('A bid was succesfully sent'),
       error => console.error(error)
     );
    this.bridgeForm.reset();
  }
  toPracticeBids() {
    this.bridgeApi.saveBid(this.bridgeForm.value.numericBid,
      this.bridgeForm.value.suitBid,
      this.bridgeForm.value.comments);
    console.log(this.bridgeApi.bid);
     this.bridgeApi.toPracticeCollection().subscribe(
       data => console.log('A practice bid was succesfully sent'),
       error => console.error(error)
     );
     this.bridgeApi.toDatabase().subscribe(
      data => console.log('A bid was succesfully sent'),
      error => console.error(error)
    );
   this.bridgeForm.reset();
  }
  Pass() {
    this.bridgeForm.setValue({numericBid: 'Pass', suitBid: 'Pass', comments: ''});
  }
  constructor(public bridgeApi: BridgeApi) { }
  ngOnInit() { }
}
