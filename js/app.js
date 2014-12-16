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
        .state('about', {
            url: '/about',
            views: {
                header: {
                    templateUrl: 'templates/partial-header.html',
                    controller: function($scope) {}
                },
                content: {
                    templateUrl: 'templates/partial-about.html',
                    controller: function($scope) {}
                },
                footer: {
                    templateUrl: 'templates/partial-footer.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('code', {
            url: '/code',
            views: {
                header: {
                    templateUrl: 'templates/partial-header.html',
                    controller: function($scope) {}
                },
                content: {
                    templateUrl: 'templates/partial-code.html',
                    controller: function($scope) {}
                },
                footer: {
                    templateUrl: 'templates/partial-footer.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('resume', {
            url: '/resume',
            views: {
                header: {
                    templateUrl: 'templates/partial-header.html',
                    controller: function($scope) {}
                },
                content: {
                    templateUrl: 'templates/partial-resume.html',
                    controller: function($scope) {}
                },
                footer: {
                    templateUrl: 'templates/partial-footer.html',
                    controller: function($scope) {}
                }
            }
        })
    });
