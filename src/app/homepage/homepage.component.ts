import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger } from '../shared/animations/animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [
    routeFadeStateTrigger
  ]
})
export class HomepageComponent implements OnInit {
  @HostBinding('@routeFadeState') routeAnimation = true;
  constructor() { }

  ngOnInit() {
    console.log('hello master');
  }

}
