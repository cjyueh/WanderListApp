var app = angular.module('WanderList', []);

app.controller('DestinationsCtrl', ['$scope', function($scope) {
  $scope.test = 'Hello world!';
  $scope.destinations = [
    'Vernazza, Italy'
  ];
}]);