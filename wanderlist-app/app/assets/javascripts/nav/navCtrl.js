var app = angular.module('WanderList');

app.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
  $scope.loggedIn = Auth.isAuthenticated;
  $scope.logout = Auth.logout;

  //access current user to set user
  Auth.currentUser().then(function(user) {
    $scope.user = user;
  });

  //event listener for when new user signs up and set user
  $scope.$on('devise:new-registration', function(e, user) {
    $scope.user = user;
  });

  //event listener for when user logs in & set user
  $scope.$on('devise:login', function(e, user) {
    $scope.user = user;
  });

  //event listener for when user logs out & clear out user
  $scope.$on('devise:logout', function(e, user) {
    $scope.user = {};
  });
}]);