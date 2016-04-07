var app = angular.module('WanderList');

app.controller('UsersCtrl', ['$scope', 'users', 'user', function($scope, users, user) {
  $scope.test = "hi";
  //get a particular user
  $scope.user = user;
}]);