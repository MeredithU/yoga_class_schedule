'use strict';

var yogaClassControllers = angular.module('yogaClassControllers', []);

yogaClassControllers.controller('YogaClassCtrl', ['$scope', '$http', 
	function($scope, $http) {
	$http.get('classes/classes.json').success(function(data) {
		$scope.classes = data;
		/*console.log($scope.classes[0].day);*/
	});

	$scope.dayNumber = 'dayNumber';

	$scope.studios = {capitolHill: false, wedgewood: false};

	/*$scope.levels = {allLevels: false, levelOne: false};*/
}]);

yogaClassControllers.controller('YogaClassDetailCtrl', ['$scope', '$routeParams',
 	function($scope, $routeParams) {
 			$scope.yogaClass = data;
 }]);

/*yogaClassControllers.controller('YogaClassDetailCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		$http.get('classes/' + $routeParams.classId + '.json').success(function(data) {
			$scope.yogaClass = data;
		});
}]);*/
