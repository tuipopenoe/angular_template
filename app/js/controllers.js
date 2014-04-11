'use strict';

// Controllers

var tuipopenoeControllers = angular.module('tuipopenoeControllers', []);

tuipopenoeControllers.controller('ResumeCtrl', ['$scope', 'Resume',
	function($scope, Resume){
		$scope.items = Resume.query();
		$scope.orderProp = 'date';
	}]);

tuipopenoeControllers.controller('ResumeDetailCtrl', ['$scope', '$routeParams', 'Resume',
	function($scope, $routeParams, Resume){
		$scope.item = Resume.get({itemId: $routeParams.itemId}, function(item){
			$scope.mainImageUrl = item.images[0];
		});

		$scope.setImage = function(imageUrl){
			$scope.mainImageUrl = imageUrl;
		}
	}]);

tuipopenoeControllers.controller('EducationCtrl', ['$scope', 'Education',
	function($scope, Education){
		$scope.items = Education.query();
		$scope.orderProp = 'date';
	}]);

tuipopenoeControllers.controller('CodeCtrl', ['$scope', 'Code',
	function($scope, Code){
		$scope.items = Code.query();
		$scope.orderProp = 'date';
	}]);