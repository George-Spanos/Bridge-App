import { Component, OnInit } from '@angular/core';
import { BridgeApi} from '../bridge.service';
@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.css']
})
export class MainSectionComponent implements OnInit {
  cardsArray = this.bridgeApi.deck();
  constructor( public bridgeApi: BridgeApi) { }

getHand(array) {
  console.log(this.bridgeApi.initializeHand(array));
}

  ngOnInit() {
  }

}
