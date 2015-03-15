var app = angular.module('app');
app.controller('homeCtrl', ['$scope', function($scope){
  $scope.title= 'Home';

  $scope.projects = [
    {id: 0, title: 'Compositions', templateUrl: 'app/music/music.html'},
    {id: 1, title: 'Gallery', templateUrl: 'app/gallery/gallery.html'},
    {id: 2, title: 'Blog', templateUrl: 'app/blog/blog.html'},
    {id: 3, title: '3D', templateUrl: 'app/3d/3d.html'},
    {id: 4, title: 'Resume', templateUrl: 'app/resume/resume.html'}
  ];

}]);
