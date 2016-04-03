var app = angular.module('WanderList');

app.factory('itineraries', [function() {
  var o = {
    itineraries: []
  };
  return o;
}]);