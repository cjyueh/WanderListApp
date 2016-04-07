var app = angular.module('WanderList');

app.controller('UsersCtrl', ['$scope', 'Auth', function($scope, Auth) {
  $scope.test = "hi";
  // //get a particular user
  // $scope.user = user;

  //access current user to set user
  Auth.currentUser().then(function(user) {
    $scope.user = user;
  });
  
}]);