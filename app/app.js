var app = angular.module('app', ['ui.router', 'directive.LiBerry', 'wu.masonry']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/home/home.html'
    });
}]);

//Expose a base url to all controllers
app.run(function($rootScope, $location) {
    $rootScope.location = $location;
});
