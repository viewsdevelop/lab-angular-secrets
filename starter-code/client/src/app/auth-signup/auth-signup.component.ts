import { Component, OnInit } from '@angular/core';

// To Review
import { SessionService } from "./../session.service";

// To Review
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {
  
  // To Review
  user: any;
  //

  // Create the "formInfo" object to store all the information on
  // the form.
  formInfo = {
    username: '',
    password: '',
    name: "",
    secret: ""
  };
  
  // To Review: Stores the error that can be generated during the 
  // signup process.
  error: string;
  //
  
  // To Review
  constructor(private session: SessionService, private router: Router) { }
  //
  
  // To Review
  ngOnInit() {
  }
  //

  // To Review: Signup Method to handle the request.
  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          this.router.navigate(["/private"]);
        },
        (err) => {
          this.error = err;
        }
      );
  }
}
