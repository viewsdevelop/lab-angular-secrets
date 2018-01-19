import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SessionService } from "./session.service";

// Add the RouterModule + Routes from Angular
// To Review
import { RouterModule, Routes } from "@angular/router";
//

import { AppComponent } from './app.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from './my-private-page/my-private-page.component';

// Create a Routes array with the following routes:
// signup --> That will render AuthSignupComponent
// login --> That will render AuthLoginComponent
// private --> That will render MyPrivatePageComponent

const routes: Routes = [

  // I understand that this is to set the Home Page. However,
  // what is the purpose of "pathMatch: "full"?
  { path: "", redirectTo: "home", pathMatch: "full" },
  
  // What is AuthLoginComponent?
  { path: "login", component: AuthLoginComponent },
  
  // What is AuthSignupComponent?
  { path: "signup", component: AuthSignupComponent },

  // What is MyPrivatePageComponent?
  { path: "private", component: MyPrivatePageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    AuthSignupComponent,
    MyPrivatePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // Add the Routes Array to the "imports" section of the file.
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
