// © Tui Popenoe, 2014
'use strict';

// App Module

var tuipopenoeApp = angular.module('tuipopenoeApp',[
    'ngRoute',
    'tuipopenoeAnimations',
    'tuipopenoeControllers',
    'tuipopenoeFilters',
    'tuipopenoeServices'
    ]);

tuipopenoeApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }).
            when('/resume', {
                templateUrl: 'templates/resume.html',
                controller: 'ResumeCtrl'
            }).
            when('/education', {
                templateUrl: 'templates/education.html',
                controller: 'EducationCtrl'
            }).
            when('/code', {
                templateUrl: 'templates/code.html',
                controller: 'CodeCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);