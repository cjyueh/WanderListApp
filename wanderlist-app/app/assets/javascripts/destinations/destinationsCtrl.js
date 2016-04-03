var app = angular.module('WanderList');

app.controller('DestinationsCtrl', ['$scope', '$stateParams', 'destinations', function($scope, $stateParams, destinations) {
  //get a destination from all destinations using its id
  $scope.destination = destinations.destinations[$stateParams.id];
}]);