import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Router } from '@angular/router';
@Injectable()
export class User {
  constructor(public http: HttpClient) { }
  isLoading = false;
  premium = false;
  username: string;
  password: string;
  email: string;
  img: string;
  leadVoted: string[];
  bidVoted: string[];
  loggedIn = false; // REMOVING BOOTSTRAP -> ANGULAR MATERIAL
  registered = false;
  exists = false;
  logValid = false;
  description: string;
  rank: string;
  errorMessage: string;
  createUser() {
    this.isLoading = true;
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    const body = JSON.stringify(user);
    return this.http.post('https://bridge-auction-app.herokuapp.com/register', body, { headers: header }).map(
      (response: any) => {
        console.log(response);
        this.exists = response.result;
        if (this.exists) {
          this.errorMessage = response.title;
        }
        setTimeout(() => { this.errorMessage = null; this.exists = false; }, 4000);
        this.isLoading = false;
      }
    ).catch(
      (error) => Observable.throw(error)
    );
  }
  loginUser() {
    this.isLoading = true;
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const user = {
      username: this.username,
      password: this.password,
    };
    const body = JSON.stringify(user);
    return this.http.post('https://bridge-auction-app.herokuapp.com/login', body, { headers: header }).map(
      (response: any) => {
        console.log(response);
        this.loggedIn = response.result.valid;
        if (!this.loggedIn) {
          this.logValid = true;
          this.errorMessage = response.title;
          this.isLoading = false;
        } else {
          this.img = response.result.img;
          this.rank = response.result.rank;
          this.description = response.result.desc;
          this.username = response.result.username;
          this.premium = response.result.premium;
          this.isLoading = false;
        }
      }
    ).catch(
      (error) => Observable.throw(error)
    );
  }
  editUser(link: string, value: any) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    const change = {
      username: this.username,
      value: value
    };
    const body = JSON.stringify(change);
    return this.http.post(link, body, { headers: header }).map(
      (response: any) => response
    ).catch(
      (error) => Observable.throw(error)
    );
  }
}
