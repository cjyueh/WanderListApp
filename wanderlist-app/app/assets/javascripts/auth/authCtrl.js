var app = angular.module('WanderList');

app.controller('AuthCtrl', ['$scope', '$state', 'Auth', function($scope, $state, Auth) {
  //when user is logged in, redirect to 'home'
  $scope.login = function() {
    Auth.login($scope.user).then(function() {
      $state.go('home');
    });
  };

  //when user is signed up, redirect to 'home'
  $scope.register = function() {
    Auth.register($scope.user).then(function() {
      $state.go('home');
    });
  };
}]);