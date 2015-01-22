// Tui Popenoe
// Angular Base Template
'use strict';

var base = angular.module('base', [
    ]);

var route_config = ['$urlRouterProvider', function($urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
}];

/*var state_config = ['$stateProvider', function($stateProvider){
    $stateProvider
        .state('root', {
            url: '/',
            views: {
                content: {
                    templateUrl: 'tmp/_root.html',
                    controller: function($scope) {}
                }
            }
        })
}];

var html5_config = ['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
}]*/

base
    .config(route_config)
/*    .config(state_config)
    .config(html5_config)*/;


base
    .run(function run(){

    });

base
    .controller('base_ctrl', function BaseCtrl($scope, $location){

    });