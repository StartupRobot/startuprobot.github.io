(function(){
	angular
		.module('app.services')
		.factory('scrollService', scrollService);

	scrollService.$inject = ['$location', '$anchorScroll'];

	function scrollService($location, $anchorScroll){
		var service = {
			scrollTo: scrollTo
		};

		return service;

		function scrollTo(location){
			$location.hash(location);
			$anchorScroll();
		}
	}	
})()