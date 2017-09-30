import { Component } from '@angular/core';
import {User} from './Services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public user: User) {}
}
