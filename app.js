var app = angular.module('WanderList', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'DestinationsCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);

app.factory('destinations', [function() {
  var o = {
    destinations: []
  };
  return o;
}]);

app.controller('DestinationsCtrl', ['$scope', 'destinations', function($scope, destinations) {
  $scope.test = 'Hello world!';
  $scope.destinations = destinations.destinations;
  $scope.addDestination = function() {
    if(!$scope.name || $scope.name === '') { return; }
    $scope.destinations.push({name: $scope.name});
    $scope.name = '';
  };
}]);