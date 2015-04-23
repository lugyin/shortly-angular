angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  console.log('LINKS:',Links);
  $scope.getLinks = function(){
    Links.getLinks().then(function(data){
      console.log('we got data: ' + data);
      console.log('STRINGIFIED DATA:',JSON.stringify(data));
      $scope.data.links = data;
    })
    //hits DB
    //gets all the links
    //puts them in $scope.data
  };
  $scope.getLinks();

});
