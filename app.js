var app = angular.module('WanderList', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //get homepage
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    //get destination show page (itineraries index page)
    .state('destinations', {
      url: '/destinations/{id}',
      templateUrl: '/destinations.html',
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

app.controller('MainCtrl', ['$scope', 'destinations', function($scope, destinations) {
  $scope.destinations = destinations.destinations;
  $scope.addDestination = function() {
    if(!$scope.name || $scope.name === '') { return; }
    $scope.destinations.push({name: $scope.name});
    $scope.name = '';
  };
}]);

app.controller('DestinationsCtrl', ['$scope', '$stateParams', 'destinations', function($scope, $stateParams, destinations) {
  $scope.destination = destinations.destinations[$stateParams.id];
}]);