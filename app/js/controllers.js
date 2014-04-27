'use strict';

var yogaClassApp = angular.module('yogaClassApp', []);

yogaClassApp.controller('YogaClassCtrl', function ($scope, $http) {
	$http.get('classes/classes.json').success(function(data) {
		$scope.classes = data;
	});

	$scope.studios = {capitolHill: false, wedgewood: false};
});
