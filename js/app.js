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
        .state('root', {
            abstract: true,
            views:{
                '' : {templateUrl: 'templates/_layout.html'},
                'header@root':{
                    templateUrl: 'templates/_header.html',
                    controller: function($scope){}
                },
                'content@root':{
                    templateUrl: 'templates/_home.html',
                    controller: function($scope){}
                },
                'footer@root': {
                    templateUrl: 'templates/_footer.html',
                    controller: function($scope){}
                }
            }
        })
        .state('home', {
            parent: 'root',
            url: '/home',
            views: {
                content: {
                    templateUrl: 'templates/_home.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('page1', {
            parent: 'root',
            url: '/page1',
            views: {
                content: {
                    templateUrl: 'templates/_page1.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('page2', {
            parent: 'root',
            url: '/page2',
            views: {
                content: {
                    templateUrl: 'templates/_page2.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('location', {
            parent: 'root',
            url: '/location',
            views: {
                content: {
                    templateUrl: 'templates/_location.html',
                    controller: function($scope) {
                        $scope.options = {scrollwheel: false};
                        $scope.map = {
                            center: {
                                latitude: 30.266585,
                                longitude: -97.742905
                            },
                            zoom:15
                        };
                        $scope.marker = {
                            id: 0,
                            coords: {
                            latitude: 30.266585,
                            longitude: -97.742905
                            },
                            options: { draggable: false }
                        };
                    }
                }
            }
        })
    });
