import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BridgeApi } from '../../Services/bridge.service';
@Component({
  selector: 'app-lead-thread-form',
  templateUrl: './lead-thread-form.component.html',
  styleUrls: ['./lead-thread-form.component.css']
})
export class LeadThreadFormComponent implements OnInit {
  @ViewChild('form') leadForm: NgForm;
  @Input() handInitialized: boolean;
  @Input() leadClicked: boolean;
  @Input() lead: {
    name: String,
    suit: String
  };
  @Input() id: string;
  constructor(public bridgeApi: BridgeApi) { }
  onSubmit() {
    const answer = {
      lead: this.lead,
      comments: this.leadForm.value.comments,
      votes: 0
    };
    this.bridgeApi.submitted = true;
    this.bridgeApi.postComment(this.id, answer).subscribe(
      data => console.log('A lead answer was succesfully sent'),
      error => console.error(error)
    );
    console.log(answer);

  }
  ngOnInit() {
  }

}
