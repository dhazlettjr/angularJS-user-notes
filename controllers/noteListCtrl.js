'use strict';

angular.module("user").controller("noteListCtrl", function($scope, notesFactory) {

  notesFactory.getNotesData()
  .then( (noteData) => {
      console.log("hey",noteData)
      $scope.noteArray = Object.entries(noteData.data);
    //   for (let notes in noteData){
    //       $scope.noteArray.push(noteData[notes]);
    //   }
     console.log(noteData.data);

  });

});