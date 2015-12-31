/**
 * Created by tremaine on 12/29/15.
 */
(function(){
    'use strict';
    angular
        .module('app.home',[
            'ngRoute'
        ])
        .config(config);
    /**
     * Configuration module of the application.
     * Boilerplate code used to define routes of the home module.
     * @param $routeProvider - Used for configuring routes.
     */
    function config($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'app/home/home.html',
            controller: 'Home',
            controllerAs: 'vm'
        });
    }
})();
