var app = angular.module('WanderList');

app.factory('destinations', ['$http', function($http) {
  var o = {
    destinations: []
  };
  o.getAll = function() {
    return $http.get('/destinations.json').success(function(data) {
      angular.copy(data, o.destinations); //copy list of destinations to client-side destinations object
    });
  };
  o.create = function(destination) {
    return $http.post('/destinations.json', destination).success(function(data) {
      o.destinations.push(data);
    });
  };
  return o;
}]);