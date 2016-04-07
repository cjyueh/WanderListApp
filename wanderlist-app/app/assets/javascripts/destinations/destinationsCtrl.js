var app = angular.module('WanderList');

app.controller('DestinationsCtrl', ['$scope', 'destinations', 'destination', 'itineraries', function($scope,  destinations, destination, itineraries) {
  //grab a particular destination
  $scope.destination = destination;
  //get all the itineraries for a particular destination: destination.itineraries.itineraries???
  $scope.itineraries = itineraries.itineraries;
}]);