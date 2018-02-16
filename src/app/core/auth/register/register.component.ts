import { FadeStateTrigger } from './../../../shared/animations/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../shared/Services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [FadeStateTrigger]
})
export class RegisterComponent implements OnInit {
  loginbool = false;
  errorMessage: string;
  @ViewChild('f') logForm: NgForm;

  changeForm() {
    this.loginbool = !this.loginbool;
    console.log(this.logForm.value);
  }
  onSubmit() {
    if (!this.loginbool) {
      this.user.username = this.logForm.value.Register.username;
      this.user.password = this.logForm.value.Register.password;
      this.user.email = this.logForm.value.Register.email;
      this.user.createUser().subscribe(
        data => {
          console.log('Success');
          if (!this.user.exists) {
            this.logForm.reset();
            this.loginbool = true;
            this.user.registered = true;
          }
        }
        ,
        error => console.error(error));
    } else {
      this.user.username = this.logForm.value.Login.username;
      this.user.password = this.logForm.value.Login.password;
      this.user.loginUser().subscribe(data => {
        console.log('Success');
        if (this.user.loggedIn) {
          this.logForm.reset();
        }
      }, error => console.error(error));
    }
  }
  constructor(public user: User) { }
  ngOnInit() {
  }
}
