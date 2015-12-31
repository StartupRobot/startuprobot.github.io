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
			'app.success',
			'app.shared_services',
			'underscore'
		]).run(run);
	/**
	 * Google Analytics integration.
	 * @param $rootScope
	 * @param $window
	 */
	function run($rootScope, $window) {
		$rootScope.$on("$locationChangeStart", function (event, nextUrl) {
			$window.ga && $window.ga('send', 'pageview', {'page': nextUrl});
		});
	}
})();