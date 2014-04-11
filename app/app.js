'use strict';

var tuipopenoeApp = angular.module('tuipopenoeApp',[
	'ngRoute',
	'tuipopenoeAnimations',
	'tuipopenoeControllers',
	'tuipopenoeServices'
	]);

tuipopenoeApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/resume', {
				templateUrl: 'partials/resume.html',
				controller: 'ResumeCtrl'
			}).
			when('/education', {
				templateUrl: 'partials/education.html',
				controller: 'EducationCtrl'
			}).
			when('/code', {
				templateUrl: 'partials/code.html',
				controller: 'CodeCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);