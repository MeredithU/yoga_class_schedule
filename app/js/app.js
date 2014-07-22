'use strict';

var yogaClassApp = angular.module('yogaClassApp', [
	'ngRoute',
	'yogaClassControllers',
	'yogaClassFilters',
	'google-maps'
]);

yogaClassApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/classes', {
				templateUrl: 'partials/class-list.html',
				controller: 'YogaClassCtrl'
			}).
			when('/classes/:classId', {
				templateUrl: 'partials/class-detail.html',
				controller: 'YogaClassDetailCtrl'
			}).
			otherwise({
				redirectTo: '/classes'
			});
	}
]);

