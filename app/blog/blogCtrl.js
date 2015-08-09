var app = angular.module('app');
app.controller('blogCtrl', ['$scope', function($scope){
  $scope.title = 'Blog';

  $scope.featuredPosts = [
    {id: 1, title: 'Experimenting With Prism', body: 'app/blog/2015_07_24.html'},
    {id: 2, title: 'Experimenting With Prism', body: 'app/blog/2015_07_24.html'},
  ];
}]);
