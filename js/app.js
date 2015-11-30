// module
(function(){
	var app = angular.module('startuprobot', [ ]);

	// controller
	app.controller('surController', function(){
		this.bots = robot;
	});

	var robot = {
		heading: "From clever ideas to billion dollar businesses.",
		subheading: "200 businesses so far get their business legit with robots!",
		footnote: "[ Not to be confused with these robots. ]",
		
	}
})();
