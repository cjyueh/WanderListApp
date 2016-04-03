var app = angular.module('WanderList');

app.controller('MainCtrl', ['$scope', 'destinations', function($scope, destinations) {
  //get all destinations
  $scope.destinations = destinations.destinations;
  $scope.addDestination = function() {
    if(!$scope.name || $scope.name === '') { return; }
    $scope.destinations.push({name: $scope.name});
    $scope.name = '';
  };
}]);