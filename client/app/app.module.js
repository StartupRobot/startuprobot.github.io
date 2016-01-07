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
			'app.contact',
			'app.services',
			'app.success',
			'app.shared_services',
			'underscore'
		]).run(run)
		.config(config);
	/**
	 * Google Analytics integration.
	 * @param $rootScope
	 * @param $window
	 */
	function run($rootScope, $window) {
		$rootScope.$on("$routeChangeSuccess", function (event, current) {
			$window.ga && $window.ga('send', 'pageview', {'page': current});
			$rootScope.pageTitle = current.title;
		});
	}
	/**
	 * Application wide route configuration
	 * @param  {[type]} $routeProvider 
	 * @return {[type]}               
	 */
	function config($routeProvider){
		$routeProvider
			.when('/error', {
				templateUrl: 'app/404/404.html',
				controller: 'Home',
				controllerAs: 'vm',
				title: '404'
			}).otherwise({redirectTo: '/'});
	}
})();