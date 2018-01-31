'use strict';

// initialize the module to encorporate the factory
angular.module("user").factory("notesFactory", function($q,$http, FBcreds){

// Return a promise with XHR
let getNotesData = () => {
return $q(function(resolve, reject) {
    $http
      .get(`${FBcreds.url}notes.json`)
      .then(
        (data) => {
          resolve(data);
        })
         .catch((err)=> {
           reject(err);
         })
  });
}

let saveNotes = (note) => {
    return $q(function(resolve, reject) {
        $http
          .post("https://list-eb90b.firebaseio.com/notes.json",JSON.stringify(note))
          .then(
            (data) => {
              resolve(data);
              console.log("new items posted", data);
            })
             .catch((err)=> {
               reject(err);
             })
      });
    }
    // this will return the firebase data
    return { getNotesData, saveNotes };
    });