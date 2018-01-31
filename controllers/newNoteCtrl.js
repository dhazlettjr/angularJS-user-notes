'use strict';

// this will set up the controller for the project
angular.module("user").controller("newNoteCtrl", function($scope, $location, notesFactory) {

    $scope.newNote = {
        notes: ""
    };

    $scope.saveNotes = () => {
        console.log('new note to save', $scope.newNote);
        notesFactory.saveNotes($scope.newNote.notes);
        $location.url("/notes");

    };

});