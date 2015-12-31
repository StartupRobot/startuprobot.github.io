/**
 * Main Angular application module.
 * All sub modules developed become
 * dependencies of the main module.
 */
(function(){
	'use strict';
	angular
		.module('startup-robot',[
			'app.home',
			'app.about',
			'app.filing',
			'app.services',
			'app.shared_services',
			'underscore'
		]);
})();