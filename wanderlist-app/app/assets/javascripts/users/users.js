var app = angular.module('WanderList');

app.factory('users', ['$http', function($http) {
  var o = {
    users: []
  };
  o.get = function(id) {
    return $http.get('/users/' + id + '.json').then(function(res) {
      return res.data;
    });
  };
  return o;
}]);