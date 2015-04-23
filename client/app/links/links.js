angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  console.log('LINKS:',Links);
  $scope.getLinks = function(){
    Links.getLinks().then(function(data){
       console.log('STRINGIFIED DATA:',data);
      $scope.data.links = data;
      console.log('we got data: ', $scope.data.links);

    })
    //hits DB
    //gets all the links
    //puts them in $scope.data
  };
  $scope.getLinks();

});
