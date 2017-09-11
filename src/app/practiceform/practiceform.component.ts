import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BridgeApi } from '../bridge.service';
@Component({
  selector: 'app-practiceform',
  templateUrl: './practiceform.component.html',
  styleUrls: ['./practiceform.component.css']
})
export class PracticeformComponent implements OnInit {
  @ViewChild('f') bridgeForm: NgForm;
  answered = false;
  Pass() {
    this.bridgeForm.setValue({ numericBid: 'Pass', suitBid: 'Pass' });
  }
  onSubmit() {
    this.answered = true;
    this.bridgeApi.answerStatus = true;
    this.bridgeApi.answer = this.bridgeForm.value.numericBid + ' ' + this.bridgeForm.value.suitBid;
    console.log(this.bridgeApi.answer);
    this.bridgeForm.reset();
  }
  constructor(public bridgeApi: BridgeApi) { }

  ngOnInit() {
  }

}
