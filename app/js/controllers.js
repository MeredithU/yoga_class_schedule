'use strict';

var yogaClassControllers = angular.module('yogaClassControllers', []);

/*****************************************************************
		Navigation Controller
*****************************************************************/

yogaClassControllers.controller('ScrollController', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
    $scope.gotoSchedule = function() {
      $location.hash('class_schedule');
      $anchorScroll();
    };

    $scope.gotoStudioLocation = function() {
      $location.hash('studio-locations');
      $anchorScroll();
    };
  }
]);

/*****************************************************************
		Class Schedule Controller
*****************************************************************/

yogaClassControllers.controller('YogaClassCtrl', ['$scope', '$http', 
	function($scope, $http) {
		$http.get('/api/yogaclasses').success(function(data) {
			$scope.classes = data;
		});

		$scope.dayNumber = 'dayNumber';

		$scope.classNames = {allLevelsFlowClass: false, levelOneClass: false, levelTwoClass: false}

		$scope.studios = {capitolHill: false, wedgewood: false};

		$scope.levels = {allLevels: false, levelOne: false, levelTwo: false};
	}
]);

/*****************************************************************
		Google Map Controller
*****************************************************************/

yogaClassControllers.controller('LocationMapCtrl', ['$scope', 
	function($scope) {
		$scope.capitolHillMap = {
	    center: {
	      latitude: 47.614329,
	      longitude: -122.325194
	    },
	    zoom: 14,
	    marker: {
	    	coords: {
	    		latitude: 47.614329,
	      	longitude: -122.325194
	      }
	    }
		};

		$scope.wedgewoodMap = {
	    center: {
	      latitude: 47.6825699,
	      longitude: -122.2908037
	    },
	    zoom: 14,
	    marker: {
	    	coords: {
	    		latitude: 47.6825699,
	      	longitude: -122.2908037
	      }
	    }
		};
	}
]);

/*****************************************************************
		Passes & Rates Controller
*****************************************************************/

yogaClassControllers.controller('AccordionCtrl', ['$scope', 
	function($scope) {
	  $scope.oneAtATime = false;

	  $scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };
	}
]);

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




