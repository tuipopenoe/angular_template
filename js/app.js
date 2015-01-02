// © Tui Popenoe, 2014
'use strict';

// App Module
var angular_template = angular.module('angular_app',[
    'ui.router',
    'angular_animations',
    'uiGmapgoogle-maps'
    ]);

angular_template.config(function($stateProvider,
                                 $urlRouterProvider,
                                 $locationProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                header: {
                    templateUrl: 'templates/partial-header.html',
                    controller: function($scope) {}
                },
                content: {
                    templateUrl: 'templates/partial-home.html',
                    controller: function($scope) {}
                },
                footer: {
                    templateUrl: 'templates/partial-footer.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('page1', {
            url: '/page1',
            views: {
                header: {
                    templateUrl: 'templates/partial-header.html',
                    controller: function($scope) {}
                },
                content: {
                    templateUrl: 'templates/partial-page1.html',
                    controller: function($scope) {}
                },
                footer: {
                    templateUrl: 'templates/partial-footer.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('page2', {
            url: '/page2',
            views: {
                header: {
                    templateUrl: 'templates/partial-header.html',
                    controller: function($scope) {}
                },
                content: {
                    templateUrl: 'templates/partial-page2.html',
                    controller: function($scope) {}
                },
                footer: {
                    templateUrl: 'templates/partial-footer.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('page3', {
            url: '/page3',
            views: {
                header: {
                    templateUrl: 'templates/partial-header.html',
                    controller: function($scope) {}
                },
                content: {
                    templateUrl: 'templates/partial-page3.html',
                    controller: function($scope) {}
                },
                footer: {
                    templateUrl: 'templates/partial-footer.html',
                    controller: function($scope) {}
                }
            }
        })
    });
