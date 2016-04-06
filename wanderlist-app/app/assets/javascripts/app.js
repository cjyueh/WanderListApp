var app = angular.module('WanderList', ['ui.router', 'templates', 'Devise']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //get homepage
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        destinationPromise: ['destinations', function(destinations) {
          return destinations.getAll(); //call .getAll() to get all destinations from server to display in view
        }]
      }
    })
    //get destination show page (itineraries index page)
    .state('destinations', {
      url: '/destinations/{id}',
      templateUrl: 'destinations/_destinations.html',
      controller: 'DestinationsCtrl',
      resolve: {
        destination: ['$stateParams', 'destinations', function($stateParams, destinations) {
          return destinations.get($stateParams.id);
        }]
      }
    })
    //get itinerary show page (activities index page)
    .state('itineraries', {
      url: '/itineraries/{id}',
      templateUrl: 'itineraries/_itineraries.html',
      controller: 'ItinerariesCtrl'
    })
    //get login page
    .state('login', {
      url: '/users/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl'
    })
    //get signup page
    .state('sign-up', {
      url: '/users/sign-up',
      templateUrl: 'auth/_sign-up.html',
      controller: 'AuthCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);

app. directive('destMap', function() {
  return {
    restrict: 'E',
    template: '<div></div>',
    replace: true,
    link: function(scope, element, attrs) {
      var myLatLng = new google.maps.LatLng(37.774, -122.431);
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
      var myLatLng = new google.maps.LatLng(37.774, -122.431);
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