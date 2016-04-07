var app = angular.module('WanderList');

app.controller('UsersCtrl', ['$scope', 'Auth', function($scope, Auth) {
  //access current user
  Auth.currentUser().then(function(user) {
    $scope.user = user;
  });
}]);