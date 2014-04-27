'use strict';

var yogaClassApp = angular.module('yogaClassApp', []);

yogaClassApp.controller('YogaClassCtrl', function ($scope) {
	$scope.classes = [
	{	'name': 'All Levels',
		'day': 'Monday',
		'startTime': '9:30am',
		'endTime': '10:45am',
		'teacher': 'Amelia',
		'studio': 'Capitol Hill',
		'level': 'All'
	},
	{	'name': 'All Levels',
		'day': 'Monday',
		'startTime': '9:30am',
		'endTime': '10:45am',
		'teacher': 'Jenny',
		'studio': 'Wedgewood',
		'level': 'All'
	},
	{	'name': 'All Levels Flow',
		'day': 'Monday',
		'startTime': '6:30am',
		'endTime': '7:45am',
		'teacher': 'Amelia',
		'studio': 'Capitol Hill',
		'level': 'All'
	},
	{	'name': 'All Levels',
		'day': 'Monday',
		'startTime': '6:30am',
		'endTime': '7:45am',
		'teacher': 'Jenny',
		'studio': 'Wedgewood',
		'level': 'All'
	},
	{	'name': 'Level I',
		'day': 'Monday',
		'startTime': '4pm',
		'endTime': '5:15pm',
		'teacher': 'Laura',
		'studio': 'Capitol Hill',
		'level': 'I'
	},
	{	'name': 'Level I',
		'day': 'Monday',
		'startTime': '4:30pm',
		'endTime': '5:30pm',
		'teacher': 'Jen',
		'studio': 'Wedgewood',
		'level': 'I'
	},
	{	'name': 'All Levels',
		'day': 'Tuesday',
		'startTime': '9:30am',
		'endTime': '10:45am',
		'teacher': 'Amelia',
		'studio': 'Capitol Hill',
		'level': 'All'
	},
	{	'name': 'All Levels',
		'day': 'Tuesday',
		'startTime': '9:30am',
		'endTime': '10:45am',
		'teacher': 'Jenny',
		'studio': 'Wedgewood',
		'level': 'All'
	},
	];

	$scope.studios = {capitolHill: false, wedgewood: false};
});

yogaClassApp.filter('myFilter', function() {
	return function(items, studios) {
		var studioMatches = [];

		angular.forEach(items, function(item) {
			if(studios.capitolHill == false && studios.wedgewood == false) {
				studioMatches.push(item);
			}
			else if(studios.capitolHill == true && studios.wedgewood == false && item.studio == 'Capitol Hill') {
				studioMatches.push(item);
			}
			else if(studios.capitolHill == false && studios.wedgewood == true && item.studio == 'Wedgewood') {
				studioMatches.push(item);
			}
		});

		return studioMatches;
	};
});
