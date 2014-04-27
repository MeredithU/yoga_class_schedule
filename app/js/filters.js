'use strict';


// Filter by studio
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
