import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from '../shared/animations/animations';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class DonateComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;
  constructor() { }

  ngOnInit() {
  }

}
