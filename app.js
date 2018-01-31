

"use strict";

let isAuth = (authFactory) =>
  new Promise((resolve, reject) => {
    authFactory.isAuthenticated().then(userBool => {
      console.log("user???", userBool);
      if (userBool) {
        console.log("Authenticated user. Go ahead");
        resolve();
      } else {
        console.log("Not Authenticated user. Go away");
        reject();
      }
    });
  });

angular.module("user", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/register", {
      templateUrl: "partials/registration.html",
      controller: "registrationCtrl"
    })
    .when("/login", {
        templateUrl: "partials/login.html",
        controller: "loginCtrl"
    })
    .when("/notes", {
      templateUrl: "partials/noteList.html",
      controller: "noteListCtrl"
    })
    .when("/new", {
        templateUrl: "partials/newNote.html",
        controller: "newNoteCtrl"
    })
    .otherwise("/login")
})
.run(FBCreds => {
    let creds = FBCreds;
    let authConfig = {
      apiKey: creds.key,
      authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
  });