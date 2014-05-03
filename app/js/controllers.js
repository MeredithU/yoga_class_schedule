'use strict';

var yogaClassControllers = angular.module('yogaClassControllers', []);

yogaClassControllers.controller('YogaClassCtrl', ['$scope', '$http', 
	function ($scope, $http) {
	$http.get('classes/classes.json').success(function(data) {
		$scope.classes = data;
	});

	$scope.dayNumber = 'dayNumber';

	$scope.studios = {capitolHill: false, wedgewood: false};
}]);

yogaClassControllers.controller('YogaClassDetailCtrl', ['$scope', '$routeParams',
	function($scope, $routeParams) {
			$scope.classID = $routeParams.classID;
}]);
