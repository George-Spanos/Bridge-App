import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from '../shared/animations/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class ContactComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;
  constructor() { }

  ngOnInit() {
  }

}
