'use strict';

var yogaClassApp = angular.module('yogaClassApp', [
	'ngRoute',
	'yogaClassControllers',
	'yogaClassFilters',
	'google-maps'
]);

yogaClassApp.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'pages/home.html',
				controller: 'YogaClassCtrl'
			})
			.when('/passes', {
				templateUrl: 'pages/passes.html'
			})
			.when('/training', {
				templateUrl: 'pages/training.html'
			})
			.when('/contact', {
				templateUrl: 'pages/contact.html'
			})
			/*.when('/classes', {
				templateUrl: 'partials/class-list.html',
				controller: 'YogaClassCtrl'
			})*/
			/*.when('/classes/:classId', {
				templateUrl: 'partials/class-detail.html',
				controller: 'YogaClassDetailCtrl'
			})*/
			.otherwise({
				redirectTo: '/'
			});

		
		$locationProvider.html5Mode(true); // To remove the hash from the URL	
	}
]);

