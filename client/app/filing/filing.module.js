/**
 * Created by tremaine on 12/30/15.
 */

(function () {
    'use strict';
    angular
        .module('app.filing',[
            'ngRoute',
            'ngMessages'
        ])
        .config(config);
    /**
     * Configuration module of the application.
     * Boilerplate code used to define routes of the home module.
     * @param $routeProvider - Used for configuring routes.
     */
    function config($routeProvider){
        $routeProvider.when('/welcome',{
            templateUrl: 'app/filing/filing.html',
            controller: 'Filing',
            controllerAs: 'vm'
        });
    }
})();
