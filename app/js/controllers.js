// © Tui Popenoe, 2014
'use strict';

// Controllers Module

var tuipopenoeControllers = angular.module('tuipopenoeControllers', []);

tuipopenoeControllers.controller('HomeCtrl', ['$scope', 'Home',
    function($scope, Home){
        $scope.links = Home.query();
    }]);

tuipopenoeControllers.controller('ResumeCtrl', ['$scope', 'Resume',
    function($scope, Resume){
        $scope.items = Resume.query();
        $scope.orderProp = 'date';
    }]);

tuipopenoeControllers.controller('ResumeDetailCtrl', ['$scope', '$routeParams', 'Resume',
    function($scope, $routeParams, Resume){
        $scope.item = Resume.get({itemId: $routeParams.itemId}, function(item){
            $scope.mainImageUrl = item.images[0];
        });

        $scope.setImage = function(imageUrl){
            $scope.mainImageUrl = imageUrl;
        }
    }]);

tuipopenoeControllers.controller('EducationCtrl', ['$scope', 'Education',
    function($scope, Education){
        $scope.items = Education.query();
        $scope.orderProp = 'date';
    }]);

tuipopenoeControllers.controller('CodeCtrl', ['$scope', 'Code',
    function($scope, Code){
        $scope.items = Code.query();
        $scope.orderProp = 'date';
    }]);