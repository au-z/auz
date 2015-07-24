var app = angular.module('app');
app.controller('blogCtrl', ['$scope', function($scope){
  $scope.title = 'Blog';

  $scope.featuredPosts = [
    {id: 1, title: 'Test post1', body: 'Please ignore...'},
    {id: 2, title: 'Test post2', body: 'Please ignore...'},
    {id: 3, title: 'Test post3', body: 'Please ignore...'},
    {id: 4, title: 'Test post4', body: 'Please ignore...'},
    {id: 5, title: 'Test post5', body: 'Please ignore...'},
  ];

}]);
