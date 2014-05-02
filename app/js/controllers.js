'use strict';

var yogaClassControllers = angular.module('yogaClassControllers', []);

yogaClassControllers.controller('YogaClassCtrl', function ($scope, $http) {
	$http.get('classes/classes.json').success(function(data) {
		$scope.classes = data;
	});

	$scope.dayNumber = 'dayNumber';

	$scope.studios = {capitolHill: false, wedgewood: false};
});
