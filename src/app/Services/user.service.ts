import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
@Injectable()
export class User {
  constructor(public http: Http) { }
  premium = false;
  username: string;
  password: string;
  email: string;
  img: string;
  leadVoted: string[];
  bidVoted: string[];
  loggedIn = false;
  registered = false;
  exists = false;
  logValid = false;
  createUser() {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    const body = JSON.stringify(user);
    return this.http.post('/register', body, { headers: header }).map(
      (response: Response) => {
        this.exists = response.json().result;
        console.log(this.exists);
      }
    ).catch(
      (error: Response) => Observable.throw(error.json())
      );
  }
  loginUser() {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const user = {
      username: this.username,
      password: this.password,
    };
    const body = JSON.stringify(user);
    return this.http.post('/login', body, { headers: header }).map(
      (response: Response) => {
        this.loggedIn = response.json().result;
        if (!this.loggedIn) {
          this.logValid = true;
        }
      }
    ).catch(
      (error: Response) => Observable.throw(error.json())
      );
  }
  editUser() { }
}
