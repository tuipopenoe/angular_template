// © Tui Popenoe, 2014
'use strict';

// Services Module

var tuipopenoeServices = angular.module('tuipopenoeServices', ['ngResource']);

tuipopenoeServices.factory('Home', ['$resource',
    function($resource){
        return $resource('items/:itemId.json', {}, {
            query: {method: 'GET', params:{itemId: 'items'}, isArray:true}
        });
    }]);

tuipopenoeServices.factory('Resume', ['$resource',
	function($resource){
		return $resource('items/:itemId.json', {}, {
			query: {method: 'GET', params:{itemId: 'items'}, isArray:true}
		});
	}]);

tuipopenoeServices.factory('ResumeDetail', ['$resource',
    function($resource){
        return $resource('items/:itemId.json', {}, {
            query: {method: 'GET', params:{itemId: 'items'}, isArray:true}
        });
    }]);

tuipopenoeServices.factory('About', ['$resource',
    function($resource){
        return $resource('items/:itemId.json', {}, {
            query: {method: 'GET', params:{itemId: 'items'}, isArray:true}
        });
    }]);

tuipopenoeServices.factory('Contact', ['$resource',
    function($resource){
        return $resource('items/:itemId.json', {}, {
            query: {method: 'GET', params:{itemId: 'items'}, isArray:true}
        });
    }]);

tuipopenoeServices.factory('Code', ['$resource',
    function($resource){
        return $resource('items/:itemId.json', {}, {
            query: {method: 'GET', params:{itemId: 'items'}, isArray:true}
        });
    }]);