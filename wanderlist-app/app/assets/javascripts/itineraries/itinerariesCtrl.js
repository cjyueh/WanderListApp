var app = angular.module('WanderList');

app.controller('ItinerariesCtrl', ['$scope', '$stateParams', 'itineraries', function($scope, $stateParams, itineraries) {
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
    $scope.itineraries.push({
      destination: [{name: $scope.destination.name}],
      activity: [{
        title: $scope.activity.title,
        tip: $scope.activity.tip,
        location: $scope.activity.location,
        photo: $scope.activity.photo,
        highlight: $scope.activity.highlight}],
      tags: $scope.tags
    });
    $scope.body = '';
  };
}]);