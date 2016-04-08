var app = angular.module('WanderList');

app.controller('ItinerariesCtrl', ['$scope', '$stateParams', 'destinations', 'itineraries', function($scope, $stateParams, destinations, itineraries) {
  //get all destinations
  destinations.getAll();
  $scope.destination = {};
  $scope.destinations = destinations.destinations;
  //get an itinerary from all itineraries using its id
  // $scope.itinerary = itineraries.itineraries[$stateParams.id];

  //add a new itinerary
  $scope.addItinerary = function() {
    console.log("destination", $scope.destination, $('#destSelect').val());
    var destId = $('#destSelect').val();
    itineraries.create(
      destId,
      {
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