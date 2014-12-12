// © Tui Popenoe, 2014
'use strict';

// App Module
var tuipopenoe_dotcom = angular.module('tui_app',[
    'ngRoute',
    'tuipopenoeAnimations',
    'tuipopenoeControllers',
    'tuipopenoeFilters',
    'tuipopenoeServices'
    ]);

tuipopenoe_dotcom.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html'
        })
        .state('code', {
            url: '/code',
            templateUrl: 'partial-code.html'
        })
        .state('resume', {
            url: '/resume',
            templateUrl: 'partial-resume.html'
        })
    });
