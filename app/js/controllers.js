'use strict';

/* Controllers */

function RedirectCtrl($scope, $location, $rootScope) {
	window.location = "index.php";
}

function HomeCtrl($scope, $location, Character) {
	// $scope.characters = Character.query();
 	// $scope.orderProp = 'age';
}


function BioCtrl($scope, $routeParams, Character) {
  $scope.character = Character.get({characterName: $routeParams.characterName}, function(character) {
  });

  // the ng preferred way of setting images in views/partials
  $scope.setImage = function(bio_image_big) {
    $scope.bio_image_big = bio_image_big;
  }
  
}

