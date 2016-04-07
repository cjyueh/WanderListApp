var app = angular.module('WanderList');

app.factory('itineraries', ['$http', function($http) {
  var o = {
    itineraries: []
  };
  o.getAll = function() {
    return $http.get('/destinations/' + id + 'itineraries' + iid + '.json').success(function(data) {
      angular.copy(data, o.itineraries); //copy list of itineraries to client-side itineraries object
    });
  };
  o.create = function(itinerary) {
    console.log('create function');
    return $http.post('/destinations/' + id + 'itineraries' + iid + '.json', itinerary).success(function(data) {
      o.itineraries.push(data);
    });
  };
  return o;
}]);