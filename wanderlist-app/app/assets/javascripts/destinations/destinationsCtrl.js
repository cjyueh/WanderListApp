var app = angular.module('WanderList');

app.controller('DestinationsCtrl', ['$scope', 'destinations', 'destination', 'itineraries', function($scope,  destinations, destination, itineraries) {
  //grab a particular destination
  $scope.destination = destination;
  //get all the itineraries for a particular destination: destination.itineraries.itineraries???
  $scope.itineraries = itineraries.itineraries;
  // //add a new itinerary
  // $scope.addItinerary = function() {
  //   if(!$scope.body || $scope.body === '') { return; }
  //   $scope.itineraries.push({
  //     destination: [{name: $scope.destination.name}],
  //     activity: [{
  //       title: $scope.activity.title,
  //       tip: $scope.activity.tip,
  //       location: $scope.activity.location,
  //       photo: $scope.activity.photo,
  //       highlight: $scope.activity.highlight}],
  //     tags: $scope.tags
  //   });
  //   $scope.body = '';
  // };
}]);