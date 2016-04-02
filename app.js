var app = angular.module('WanderList', []);

app.controller('DestinationsCtrl', ['$scope', function($scope) {
  $scope.test = 'Hello world!';
  $scope.destinations = [
    {name: 'place1'},
    {name: 'place2'},
    {name: 'place3'}
  ];
  $scope.addDestination = function() {
    if(!$scope.name || $scope.name === '') { return; }
    $scope.destinations.push({name: $scope.name});
    $scope.name = '';
  };
}]);