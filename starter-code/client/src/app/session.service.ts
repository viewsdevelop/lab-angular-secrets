import { Injectable } from '@angular/core';

// To Review
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
//

@Injectable()
export class SessionService {
  
  // To Review
  user: any;
  //
  
  // To Review
  constructor(private http: Http) { }
  //

  // To Review
  handleError(e) {
    return Observable.throw(e.json().message);
  }
  //


  // Function that will receive as a parameter the user data that 
  // will be stored in the database. If the information is correct, 
  // we will assign the user session to the user variable we will
  // define.

  // To Review
  signup(user) {
    return this.http.post(`/signup`, user)
      .map(res => res.json())
      .map(user => {
        this.user = user;
        return user;
      })
      .catch(this.handleError);
  }
  //

  // Function that will receive the username and password to check  
  // out if the credentials are correct and will start a session.
  // Once the session starts, we have to store the current user in
  // the user variable.

  // To Review
  login(user) {
    return this.http.post(`\login`, user)
      .map(res => res.json())
      .map(user => {
        this.user = user;
        return this.user;
      })
      .catch(this.handleError);
  }
  //

  // Function that will return if there is a user logged in or not.
  // We will use the "user" variable in the session to do that.

  // To Review
  isLogged() {
    return this.user != undefined;
  }
  //

  // Function that will finish the session and remove the current
  // user information from the variable in the service.

  // To Review
  logout() {
    return this.http.post(`\logout`, {})
      .map(res = res.json())
      .map(user => this.user = undefined)
      .catch(this.handleError);
  }
  //

}
