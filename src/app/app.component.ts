import { Component } from '@angular/core';
import {User} from './shared/Services/user.service';
import { routeFadeStateTrigger } from './shared/animations/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(public user: User) {}
}
