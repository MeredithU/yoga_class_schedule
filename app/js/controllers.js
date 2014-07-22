'use strict';

var yogaClassControllers = angular.module('yogaClassControllers', []);

yogaClassControllers.controller('YogaClassCtrl', ['$scope', '$http', 
	function($scope, $http) {
	$http.get('classes/classes.json').success(function(data) {
		$scope.classes = data;
	});

	$scope.dayNumber = 'dayNumber';

	$scope.classNames = {allLevelsFlowClass: false, levelOneClass: false, levelTwoClass: false}

	$scope.studios = {capitolHill: false, wedgewood: false};

	$scope.levels = {allLevels: false, levelOne: false, levelTwo: false};

}]);

/*yogaClassControllers.controller('YogaClassDetailCtrl', ['$scope', '$routeParams',
 	function($scope, $routeParams) {
 			$scope.yogaClass = data;
 }]);*/

yogaClassControllers.controller('YogaClassDetailCtrl', ['$scope', '$routeParams', '$http', 
	function($scope, $routeParams, $http) {
		/*$http.get('classes/' + $routeParams.classId + '.json').success(function(data) {*/
		$http.get('classes/all-levels-flow.json').success(function(data) {
			console.log($scope.yogaClass = data);

		});
}]);
