var app = angular.module('WanderList');

app.controller('ItinerariesCtrl', ['$scope', '$stateParams', 'destinations', 'itineraries', function($scope, $stateParams, destinations, itineraries) {
  //get all destinations
  destinations.getAll();
  $scope.destination = {};
  $scope.destinations = destinations.destinations;

  //add a new itinerary
  $scope.addItinerary = function() {
    console.log("destination", $scope.destination, $scope.destination.id);
    itineraries.create({
      activity: [{
        title: $scope.destination.itinerary.activity.title,
        tip: $scope.destination.itinerary.activity.tip,
        location: $scope.destination.itinerary.activity.location,
        photo: $scope.destination.itinerary.activity.photo,
        highlight: $scope.destination.itinerary.activity.highlight}],
      tags: $scope.destination.itinerary.tags
    });
    $scope.body = '';
  };
}]);