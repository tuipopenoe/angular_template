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
            when('/about', {
                templateUrl: 'templates/about.html',
                controller: 'AboutCtrl'
            }).
            when('/code', {
                templateUrl: 'templates/code.html',
                controller: 'CodeCtrl'
            }).
            when('/contact', {
                templateUrl: 'templates/contact.html',
                contorller: 'ContactCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);