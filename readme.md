![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# PP | Secrets

## Learning Goals

After this lesson, you will be able to:

- Create an API that will serve contents from a database to an Angular app.
- Create an Angular application that will use an API to send and receive information from your Mongo Database.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone your fork into your `~/code/labs` folder.

## Submission

Upon completion, run the following commands:

```bash
$ git add .
$ git commit -m"done"
$ git push origin master
```

Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull Request name, add your campus, name, and last name separated by a dash "-".

## Deliverables

In this lesson you have to deliver two different folders: the server API and the client. You can have both the client and server in the same folder so you only submit one repo.

## Introduction

We all have secrets, but sometimes we would like to tell our secrets to a reliable source that will keep them between us. We are going to build an application that will allow us to store our biggest secret.

## Starter Code Structure

In the repo you have forked, we provide you starter code. This code has the main structure for the API and the Client app you are going to build.

We have already generated and added all the packages you will need to start working in your API. The folder structure is the following:

```
└── starter-code
    ├── authentication-app
    │   ├── README.md
    │   ├── angular-cli.json
    │   ├── e2e
    │   │   ├── app.e2e-spec.ts
    │   │   ├── app.po.ts
    │   │   └── tsconfig.json
    │   ├── karma.conf.js
    │   ├── package.json
    │   ├── protractor.conf.js
    │   ├── src
    │   │   ├── app
    │   │   │   ├── app.component.css
    │   │   │   ├── app.component.html
    │   │   │   ├── app.component.ts
    │   │   │   ├── app.module.ts
    │   │   │   ├── auth-login
    │   │   │   │   ├── auth-login.component.css
    │   │   │   │   ├── auth-login.component.html
    │   │   │   │   └── auth-login.component.ts
    │   │   │   ├── auth-signup
    │   │   │   │   ├── auth-signup.component.css
    │   │   │   │   ├── auth-signup.component.html
    │   │   │   │   └── auth-signup.component.ts
    │   │   │   ├── my-private-page
    │   │   │   │   ├── my-private-page.component.css
    │   │   │   │   ├── my-private-page.component.html
    │   │   │   │   └── my-private-page.component.ts
    │   │   │   └── session.service.ts
    │   │   ├── assets
    │   │   ├── environments
    │   │   │   ├── environment.prod.ts
    │   │   │   └── environment.ts
    │   │   ├── favicon.ico
    │   │   ├── index.html
    │   │   ├── main.ts
    │   │   ├── polyfills.ts
    │   │   ├── styles.css
    │   │   ├── test.ts
    │   │   └── tsconfig.json
    │   └── tslint.json
    └── server
        ├── app.js
        ├── bin
        │   └── www
        ├── config
        │   └── passport.js
        ├── models
        │   └── user.js
        ├── package.json
        ├── public
        └── routes
            └── authController.js
```

As you can see, the project has an `authentication-app` folder where you will find all the necessary files to create your angular app. It already has all the components and services created. The server folder has the structure to create the API that will use the Angular app.

## API

We've created the starter code for the API already. We'd like to focus on Angular only, but let's first detail the API.

### Data Model

`username` (String) - User's username for authentication.
`password` (String) - Encrypted with bcrypt, we will use it with the username to authenticate the user.
`name` (String) - User's full name
`secret` (String) - A super top secret detail about the user that only they will be able to see.

### Routes

#### POST /api/signup

**Parameters**

`username` (String)
`password` (String)
`name` (String)
`secret` (String)

**Return Values**

- **Username exists** - Status `400`
- **Server error** - Status `500`
- **Success** - Status `200`, and the created `user` object

#### POST /api/login

**Parameters**

`username` (String)
`password` (String)

**Return Values**

- **Error logging in** - Status `401`
- **User doesn't exist** - Status `501`
- **Database error** - Status `500`
- **Success** - Status `200`, and the logged in `user`

#### POST /api/loggedin

**Parameters**

*None*

**Return Values**

- **User was previously logged in** - Status `200`, and the previously logged in user
- **User was *not* previously logged in** - Status `403`

#### POST /api/logout

**Parameters**

*None*

**Return Values**

- Logs the user out and returns Status `200`

#### GET /api/private

**Parameters**

*None*

**Return Values**

- **User is logged in** - Returns the logged in user's secret and Status 200
- **User is *not* logged in** - Returns Status `403` and an error message

:::warning
:exclamation: Remember to run the express server with `$ bin/www` before continuing.
:::

## Client

Since our API is already complete, we can start coding the client. Remember that you will have to generate the necessary files with `$ ng build --prod` and add all the generated files in the `authentication-app/build` folder to the `/public` folder of the server.

#### Iteration 1: Session Service

The first thing we will do is the service that we will use to retrieve data from our API. You will be working in `authentication-app/src/app/session.service.ts`. We will need to store the **current user in a variable** inside the service.

We will have to create different methods to call the corresponding API routes:

- `signup()`, that will receive as a parameter the user data that will be stored in the database. If the information is correct, we will assign the user session to the `currentUser` variable we have to defined in the service.
- `login()`, that will receive the username and password to check  if the credentials are correct and they can start a session. Once the session starts, we have to store the current user in the `currentUser` variable.
- `isLogged()` will return if there is a user logged in or not. We will use the `currentUser` variable in the session service to do that.
- `logout()` will finish the session, and remove the current user information from the variable in the service.
- `handleError()` will receive an error as a parameter and return an Observable with the message of the error.

Once we have done all this, we will have the service correctly implemented.

**Tasks**

Create the necessary code to create a service that we will call the methods we have defined in the API and that we will use in the app. We have to:

- Create a `currentUser` variable to store the current user information.
- Generate the code of the following functions described above:
  - `handleError()`
  - `signup()`
  - `login()`
  - `isLogged()`
  - `logout()`

#### Iteration 2: Routes

The following step in our process is to generate the routes that we will use to show the different components. We will have three different routes:

- `/signup`
- `/login`
- `/private`

The components are already in the project, so you just have to add the routes into the `authentication-app/src/app/app.module.ts` file that will render the correct component depending on the route.

**Tasks**

Change the `authentication-app/src/app/app.module.ts` file to add the routes, by doing the following:

- Add the `RouterModule` and `Routes` modules form `@anguler/router`.
- Create a `Routes` array, with the following routes:
  - `signup`, that will render `AuthSignupComponent`.
  - `login`, that will render `AuthLoginComponent`.
  - `private`, that will render `MyPrivatePageComponent`.
- Add the array to the `imports` section in the file.

#### Iteration 3: App Component

The `app.component` will be super simple. It will have two links (`login` and `signup`) if the user is not logged in, and a button (`logout`) if the user is logged in. You should use an `ngIf` directive to do that. You also have to style the page.



**Tasks**

Change the `app.component.html` and `app.component.ts` files to do the following:

- If a user is not logged in, show two different links that will render different components:
  - `login`, that will render `AuthLoginComponent`.
  - `signup`, that will render `AuthSignupComponent`.
- If a user is logged in, show a button to `logout`.

#### Iteration 4: Signup Component

Once the user is in the `/signup` page, we have to show him a form that will allow to create a new account in the database. We have defined our model with four different fields: `username`, `password`, `name`, and `secret`.

We are saving our secret, so we don't want people to see what it is about while signing up. Use a `password` input field in the form.

When we click on the `Signup` button, we have to use the service we did in previous iterations to store the user information in the database.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_a8ca6abdc244a6b1df0fdbe5676de00f.png)

**Tasks**

Create the necessary changes in the code to allow users to signup in our application:

- `auth-signup.component.html` file, create the form with the following fields:
  - `username`, type text.
  - `password`, type password.
  - `Full name`, type text.
  - `secret`, type password.
- `auth-signup.component.ts` file, add the following:
  - `formInfo` object, to store all the information of the form.
  - `error`, to store the error it could be generated during the signup process.
  - `signup()` method to handle the request.
- Once the user has signed up, we start the session automatically, so we have to redirect the user to the `/private` page.

#### Iteration 5: Login Component

The login component has to have all the necessary fields to start a new session, so we have to create a form with username and password.

Again, when we click on the `Login` button, we have to use the service we did in the **Iteration 4** to recover the data form the database and check out if the login succed or not.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_7383d3d34d38e3b07cbcb12ada70cc7b.png)

**Tasks**

- `auth-login.component.html` file, create the form with the following fields:
  - `username`, type text.
  - `password`, type password.
- `auth-login.component.ts` file, add the following:
  - `formInfo` object, to store all the information of the form.
  - `error`, to store the error it could be generated during the signup process.
  - `login()` method to handle the request.
- Once the user has logged in, we have to redirect him to the `/private` page.

#### Iteration 6: Private Component

To finish up this exercise, we have to load the user information and show it in the page. We will basically show the user's secret. We will use the user information we have in the `Session` service we created before.

**The user have to be logged in to access this page. If he is not logged in, we have to redirect him to the login page.**

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_60458338000b8fc9d4d75d22cd232f5f.png)

**Tasks**

- `my-private-page.component.html` file, show the user's secret with an interpolation.
- `my-private-page.component.ts` file, subscribe the component to the `Session` service to be able to load the user secret.
- If the user is not logged in, redirect him to the login page when he tries to access to this page.

/Happy coding!
