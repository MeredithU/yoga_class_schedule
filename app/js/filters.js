'use strict';


// Filter by studio
angular.module('yogaClassFilters', []).filter('studioFilter', function() {
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
})
.filter('levelFilter', function() {
	return function(items, levels) {
		var levelMatches = [];

		angular.forEach(items, function(item) {
			if(levels.allLevels == false && levels.levelOne == false) {
				levelMatches.push(item);
			}
			else if(levels.allLevels == true && levels.levelOne == false && item.level == 'All') {
				levelMatches.push(item);
			}
			else if(levels.allLevels == false && levels.levelOne == true && item.level == 'I') {
				levelMatches.push(item);
			}
		});

		return levelMatches;
	};
});

//Filter by level
/*angular.module('yogaClassFilters', []).filter('levelFilter', function() {
	return function(items, levels) {
		var levelMatches = [];

		angular.forEach(items, function(item) {
			if(levels.allLevels == false && levels.levelOne == false) {
				levelMatches.push(item);
			}
			else if(levels.allLevels == true && levels.levelOne == false && item.level == 'All') {
				levelMatches.push(item);
			}
			else if(levels.allLevels == false && levels.levelOne == true && item.level == 'I') {
				levelMatches.push(item);
			}
		});

		return levelMatches;
	};
});*/
