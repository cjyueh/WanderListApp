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
    })
    //get itinerary show page (activities index page)
    .state('itineraries', {
      url: '/itineraries/{id}',
      templateUrl: '/itineraries.html',
      controller: 'ItinerariesCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);

app.factory('destinations', [function() {
  var o = {
    destinations: []
  };
  return o;
}]);

app.factory('itineraries', [function() {
  var o = {
    itineraries: []
  };
  return o;
}]);

app.controller('MainCtrl', ['$scope', 'destinations', function($scope, destinations) {
  //get all destinations
  $scope.destinations = destinations.destinations;
  $scope.addDestination = function() {
    if(!$scope.name || $scope.name === '') { return; }
    $scope.destinations.push({name: $scope.name});
    $scope.name = '';
  };
}]);

app.controller('DestinationsCtrl', ['$scope', '$stateParams', 'destinations', function($scope, $stateParams, destinations) {
  //get a destination from all destinations using its id
  $scope.destination = destinations.destinations[$stateParams.id];
}]);

app.controller('ItinerariesCtrl', ['$scope', '$stateParams', 'itineraries', function($scope, $stateParams, itineraries) {
  //get an itinerary from all itineraries using its id
  $scope.itinerary = itineraries.itineraries[$stateParams.id];
}]);

app. directive('destMap', function() {
  return {
    restrict: 'E',
    template: '<div></div>',
    replace: true,
    link: function(scope, element, attrs) {
      var myLatLng = new google.maps.LatLng(28.070, 83.249);
      var mapOptions = {
        center: myLatLng,
        zoom: 8,
        maTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById(attrs.id),
        mapOptions);
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "My town"
      });
      marker.setMap(map);
    }
  };
});

app.directive('itinMap', function() {
  return {
    restrict: 'E',
    template: '<div></div>',
    replace: true,
    link: function(scope, element, attrs) {
      var myLatLng = new google.maps.LatLng(28.070, 83.249);
      var mapOptions = {
        center: myLatLng,
        zoom: 8,
        maTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById(attrs.id),
        mapOptions);
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "My town"
      });
      marker.setMap(map);
    }
  };
});