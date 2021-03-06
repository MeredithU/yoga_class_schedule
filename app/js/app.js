'use strict';

var yogaClassApp = angular.module('yogaClassApp', [
	'ngRoute',
	'yogaClassControllers',
	'yogaClassFilters',
	'google-maps',
	'ui.bootstrap'
]);

yogaClassApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'pages/home.html',
				controller: 'YogaClassCtrl'
			})
			.when('/passes', {
				templateUrl: 'pages/passes.html',
				controller: 'AccordionCtrl'
			})
			.when('/training', {
				templateUrl: 'pages/training.html'
			})
			.when('/contact', {
				templateUrl: 'pages/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
		
		$locationProvider.html5Mode(true); // To remove the hash from the URL	
	}
]);

