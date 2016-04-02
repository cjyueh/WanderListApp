var app = angular.module('WanderList', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //get homepage
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);

app.factory('destinations', [function() {
  var o = {
    destinations: []
  };
  return o;
}]);

app.controller('MainCtrl', ['$scope', 'destinations', function($scope, destinations) {
  $scope.test = 'Hello world!';
  $scope.destinations = destinations.destinations;
  $scope.addDestination = function() {
    if(!$scope.name || $scope.name === '') { return; }
    $scope.destinations.push({name: $scope.name});
    $scope.name = '';
  };
}]);