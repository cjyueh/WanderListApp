var app = angular.module('WanderList');

app.controller('ItinerariesCtrl', ['$scope', '$stateParams', 'destinations', 'itineraries', function($scope, $stateParams, destinations, itineraries) {
  //get all destinations
  $scope.destinations = destinations.destinations;
  //get an itinerary from all itineraries using its id
  $scope.itinerary = itineraries.itineraries[$stateParams.id];

  //add a new activity
  // $scope.addActivity = function() {
  //   if(!$scope.body || $scope.body === '') { return; }
  //   $scope.itinerary.activities.push({

  //   });
  // };

  //add a new itinerary
  $scope.addItinerary = function() {
    if(!$scope.body || $scope.body === '') { return; }
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