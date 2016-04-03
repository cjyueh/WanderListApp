var app = angular.module('WanderList');

app.controller('ItinerariesCtrl', ['$scope', '$stateParams', 'itineraries', function($scope, $stateParams, itineraries) {
  //get an itinerary from all itineraries using its id
  $scope.itinerary = itineraries.itineraries[$stateParams.id];
}]);