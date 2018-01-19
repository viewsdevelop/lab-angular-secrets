import { Component, OnInit } from '@angular/core';

// To Review
import { SessionService } from "./../session.service";
import { Router } from "@angular/router";
//

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  // To Review
  user: any;
  //
  
  // To Review: formInfo object to store all the information of the form 
  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  
  // To Review
  constructor(private session: SessionService, private router: Router) { }
  //

  ngOnInit() {
  }

  // To Review: login method to handle the request.
  login() {
    this.sesssion.login(this.formInfo)
      .subscribe(
        (user) => { this.router.navigate(["/private"]); },
        (err) => {
          this.error = err;
        }
      );
  }
}
