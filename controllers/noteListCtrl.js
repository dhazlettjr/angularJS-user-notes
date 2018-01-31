'use strict';

angular.module("user").controller("noteListCtrl", function($scope, notesFactory) {

  notesFactory.getNotesData()
  .then( (noteData) => {
      console.log("hey",noteData)

      //object.entries is a simple way to push an object into an array
      $scope.noteArray = Object.entries(noteData.data);
     console.log(noteData.data);

  });

});