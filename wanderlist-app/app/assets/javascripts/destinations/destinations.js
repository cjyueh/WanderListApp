var app = angular.module('WanderList');

app.factory('destinations', [function() {
  var o = {
    destinations: []
  };
  return o;
}]);