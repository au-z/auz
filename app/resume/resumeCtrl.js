var app = angular.module('app');
app.controller('resumeCtrl', ['$scope', function($scope){
  $scope.title= 'Resume';

  $scope.schools = [
    {name: 'Mountain Range High School \'10',
      gpa: '4.1',
      awards: [
        {name: 'Eagle Scout'},
        {name: 'National Honor Society Member'},
        {name: 'Symphonic Band Section Leader'}
      ],
      misc: 'Eagle Scout, National Honor Society Member, Symphonic Band Section Leader, Varsity Soccer Player'
    },
    {name: 'Saint Olaf College \'14',
      secondary: 'B.A. Computer Science, B.A. Digital Art & Animation',
      gpa: '3.67',
      misc: 'Student Government Executive Team Member, Student Senator, Saint Olaf Band Member'
    }
  ];

}]);
