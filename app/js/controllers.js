'use strict';

var yogaClassApp = angular.module('yogaClassApp', []);

yogaClassApp.controller('YogaClassCtrl', function ($scope) {
	$scope.classes = [
	{	'name': 'All Levels',
		'startTime': '9:30am'},
	{	'name': 'Ashtanga',
		'startTime': '10:30am'}
	];
});
