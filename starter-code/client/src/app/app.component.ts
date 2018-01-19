import { Component, OnInit } from '@angular/core';

// To Review
import {Router } from "@angular/router";
//

// To Review
import { SessionService } from './session.service';
//

import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // To Review
  user: any;
  //

  // To Review
  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  privateData: any = '';
  //

  // To Review
  constructor(private session: SessionService, private router: Router) { }
  //

  ngOnInit() {
  }

  // To Review
  isLogged() {
    return this.session.isLogged();
  }
  //

  // To Review
    // logout() {
    //   this.session.logout()
    //     .subscribe(
    //       () => { this.router.navigate(["/login"]); },
    //       (err) => { this.error = err; }
    //     );
    // }
  //

}
