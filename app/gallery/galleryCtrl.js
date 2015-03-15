var app = angular.module('app');
app.controller('galleryCtrl', ['$scope', function($scope){
  $scope.title = 'Gallery';
  $scope.bricks = [
    {src: 'img/gallery/img (1).jpg', type: 'm11'},
    {src: 'img/gallery/img (2).jpg', type: 'm21'},
    {src: 'img/gallery/img (3).jpg', type: 'm12'},
    {src: 'img/gallery/img (4).jpg', type: 'm22'},
    {src: 'img/gallery/img (5).jpg', type: 'm12'},
    {src: 'img/gallery/img (6).jpg', type: 'm11'},
    {src: 'img/gallery/img (7).jpg', type: 'm21'}
  ];
}]);
