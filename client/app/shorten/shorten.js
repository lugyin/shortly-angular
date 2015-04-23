angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.invalidLink = false;
  $scope.addLink = function(){
    // console.log('SCOPE LINK',$scope.link);
    Links.addLink($scope.link)
    .then(function(){
      $location.path('/links');
    })
    .catch(function(){
      $scope.invalidLink = true;
    });
  };
});
