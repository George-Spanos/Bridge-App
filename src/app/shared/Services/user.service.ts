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
  loggedIn = false; // REMOVING BOOTSTRAP -> ANGULAR MATERIAL
  registered = false;
  exists = false;
  logValid = false;
  description: string;
  rank: string;
  errorMessage: string;
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
    return this.http.post('https://bridge-auction-app.herokuapp.com/login', body, { headers: header }).map(
      (response: Response) => {
        const result = response.json();
        console.log(result);
        this.loggedIn = result.result.valid;
        if (!this.loggedIn) {
          this.logValid = true;
          this.errorMessage = result.title;
        } else {
          this.img = result.result.img;
          this.rank = result.result.rank;
          this.description = result.result.desc;
          this.username = result.result.username;
          this.premium = result.result.premium;
        }
      }
    ).catch(
      (error: Response) => Observable.throw(error.json())
      );
  }
  editUser(link: string, value: any) {
    const header = new Headers({ 'Content-Type': 'application/json' });
    const change = {
      username: this.username,
      value: value
    };
    const body = JSON.stringify(change);
    return this.http.post(link, body, { headers: header }).map(
      (response: Response) => { response.json(); }
    ).catch(
      (error: Response) => Observable.throw(error.json())
      );
  }
}
