import { Component, OnInit } from '@angular/core';
import { SessionService } from "./../session.service";

@Component({
  selector: 'app-my-private-page',
  templateUrl: './my-private-page.component.html',
  styleUrls: ['./my-private-page.component.css']
})
export class MyPrivatePageComponent implements OnInit {
  username: string = "";
  secret: string = "";

  constructor(private session: SessionService) { }

  // To Review: Subscribe the component to the Session service
  // to be able to load the user secret.
  ngOnInit() {
    this.username   = this.session.user.name,
    this.secret     = this.session.user.secret;
  }
}
