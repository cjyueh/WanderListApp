var app = angular.module('WanderList');

app.controller('DestinationsCtrl', ['$scope', 'destinations', 'destination', function($scope,  destinations, destination) {
  $scope.destination = destination;
}]);