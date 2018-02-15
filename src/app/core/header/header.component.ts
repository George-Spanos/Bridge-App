import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/Services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public user: User) { }

  ngOnInit() {
  }

}