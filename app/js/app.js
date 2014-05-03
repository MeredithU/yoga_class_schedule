'use strict';

var yogaClassApp = angular.module('yogaClassApp', [
	'ngRoute',
	'yogaClassControllers',
	'yogaClassFilters'
]);

yogaClassApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/classes', {
				templateUrl: 'partials/class-list.html',
				controller: 'YogaClassCtrl'
			}).
			when('/classes/:classID', {
				templateUrl: 'partials/class-detail.html',
				controller: 'YogaClassDetailCtrl'
			}).
			otherwise({
				redirectTo: '/classes'
			});
	}]);

