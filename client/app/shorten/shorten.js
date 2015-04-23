angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    // console.log('SCOPE LINK',$scope.link);
    Links.addLink($scope.link);
  };
});
