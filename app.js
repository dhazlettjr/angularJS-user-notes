

"use strict";

// set up module and route providers

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
    .otherwise("/")
});