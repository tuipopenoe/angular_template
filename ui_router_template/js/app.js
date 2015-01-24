// © Tui Popenoe, 2014
'use strict';

// App Module
var angular_ui_router_template = angular.module('angular_ui_router_template',[
    'ui.router',
    'uiGmapgoogle-maps'
    ]);

var route_config = ['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
}];

var state_config = ['$stateProvider', function($stateProvider){
    $stateProvider
        .state('root', {
            abstract: true,
            views:{
                '' : {templateUrl: 'tpl/_root.html'},
                'header@root':{
                    templateUrl: 'tpl/_header.html',
                    controller: function($scope){}
                },
                'content@root':{
                    templateUrl: 'tpl/_home.html',
                    controller: function($scope){}
                },
                'footer@root': {
                    templateUrl: 'tpl/_footer.html',
                    controller: function($scope){}
                }
            }
        })
        .state('home', {
            parent: 'root',
            url: '/home',
            views: {
                content: {
                    templateUrl: 'tpl/_home.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('page1', {
            parent: 'root',
            url: '/page1',
            views: {
                content: {
                    templateUrl: 'tpl/_page1.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('page2', {
            parent: 'root',
            url: '/page2',
            views: {
                content: {
                    templateUrl: 'tpl/_page2.html',
                    controller: function($scope) {}
                }
            }
        })
        .state('location', {
            parent: 'root',
            url: '/location',
            views: {
                content: {
                    templateUrl: 'tpl/_location.html',
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
}];

var html5_config = ['$locationProvider', function($locationProvider){
    /*$locationProvider.html5Mode(true).hashPrefix('!');*/
}];

angular_ui_router_template
    .config(route_config)
    .config(state_config)
    .config(html5_config);

// Cache templates
angular_ui_router_template.run( function($templateCache, $http){
    $http.get('../tpl/_header.html', {cache: $templateCache});
    $http.get('../tpl/_home.html', {cache: $templateCache});
    $http.get('../tpl/_footer.html', {cache: $templateCache});
    $http.get('../tpl/_root.html', {cache: $templateCache});
    $http.get('../tpl/_location.html', {cache: $templateCache});
    $http.get('../tpl/_page1.html', {cache: $templateCache});
    $http.get('../tpl/_page2.html', {cache: $templateCache});
});