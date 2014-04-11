'use strict';

// Services

var tuipopenoeServices = angular.module('tuipopenoeServices', ['ngResource']);

tuipopenoeServices.factory('Resume', ['$resource',
	function($resource){
		return $resource('items/:itemId.json', {}, {
			query: {method: 'GET', params:{itemId: 'items'}, isArray:true}
		});
	}]);