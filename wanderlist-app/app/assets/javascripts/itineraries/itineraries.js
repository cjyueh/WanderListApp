var app = angular.module('WanderList');

app.factory('itineraries', ['$http', function($http) {
  var o = {
    itineraries: [{
      activities: []
    }]
  };
  o.getAll = function(id, iid) {
    return $http.get('/destinations/' + id + 'itineraries' + iid + '.json').success(function(data) {
      angular.copy(data, o.itineraries); //copy list of itineraries to client-side itineraries object
    });
  };
  o.create = function(id, itinerary) {
    console.log('create function', 'destination', id, 'Itinerary', itinerary);
    return $http.post('/destinations/' + id + '/itineraries.json', itinerary).success(function(data) {
      o.itineraries.push(data);
    });
  };
  return o;
  // return {
  //   create: create
  // };
}]);