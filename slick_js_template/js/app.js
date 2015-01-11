// © Tui Popenoe, 2014
var slick_js_template = angular.module('slick_js_template', ['slick']);

angular.module('slick_js_template')
  .controller('MainCtrl', function($scope, $timeout){
      $scope.languages = [
        'ECMAScript6',
        'Java',
        'Python',
        'C++',
        'Ruby',
        'HTML5',
      ];
  });
