var app = angular.module('app');
app.controller('galleryCtrl', ['$scope', function($scope){
  $scope.title = 'Gallery';
  $scope.bricks = [
    {title: 'Rooney', src: 'img/gallery/img (1).jpg', type: 'm11'},
    {title: 'NK', src: 'img/gallery/img (2).jpg', type: 'm21'},
    {title: 'Scientist', src: 'img/gallery/img (3).jpg', type: 'm12'},
    {title: 'Buffalo', src: 'img/gallery/img (4).jpg', type: 'm22'},
    {title: '001.1', src: 'img/gallery/img (5).jpg', type: 'm12'},
    {title: 'Untitled', src: 'img/gallery/img (6).jpg', type: 'm11'},
    {title: 'Canyon', src: 'img/gallery/img (7).jpg', type: 'm21'}
  ];
}]);
