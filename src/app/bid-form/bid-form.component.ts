import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
onSubmit(form: NgForm) {
  console.log(form);
}
  constructor() { }

  ngOnInit() {
  }

}
