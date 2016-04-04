var app = angular.module('WanderList');

app.controller('MainCtrl', ['$scope', 'destinations', function($scope, destinations) {
  //get all destinations
  $scope.destinations = destinations.destinations;

  //add a new destination
  $scope.addDestination = function() {
    if(!$scope.name || $scope.name === '') { return; }
    destinations.create({
      name: $scope.name
    });
    $scope.name = ''; //clear form
  };
}]);