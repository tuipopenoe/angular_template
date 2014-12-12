// © Tui Popenoe, 2014
'use strict';

// App Module
var tuipopenoe_dotcom = angular.module('tui_app',[
    'ui.router',
    'tui_animations'
    ]);

tuipopenoe_dotcom.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/partial-home.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'templates/partial-about.html'
        })
        .state('code', {
            url: '/code',
            templateUrl: 'templates/partial-code.html'
        })
        .state('resume', {
            url: '/resume',
            templateUrl: 'templates/partial-resume.html'
        })
    });
