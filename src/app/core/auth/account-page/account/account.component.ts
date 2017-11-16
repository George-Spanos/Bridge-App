import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../../../../shared/Services/user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username: string;
  description: string;
  rank: string;
  premium: boolean;
  img: string;
  editDesc = false;
  editImg = false;
  newImg = 'Please paste your new image\'s url';
  constructor(public user: User, public router: Router) { }
  editDescription() {
    this.editDesc = true;
  }
  saveDescription() {
    this.editDesc = false;
    this.user.editUser('/changeDesc', this.description).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }
  editImage() {
    this.editImg = true;
  }
  saveImg() {
    this.editImg = false;
    this.img = this.newImg;
    this.user.editUser('/changeImg', this.img).subscribe(
      (result) => {
        console.log(result);
      }
    );
  }
  Logout() {
    this.user.loggedIn = false;
    this.user.logValid = false;
    this.user.registered = false;
    this.user.exists = false;
    this.premium = false;
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    if (this.user.loggedIn) {
      this.username = this.user.username;
      this.img = this.user.img;
      this.rank = this.user.rank;
      this.description = this.user.description;
      this.premium = this.user.premium;
    }
  }
}
