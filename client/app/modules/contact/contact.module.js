/**
 * Created by tremaine on 12/30/15.
 */

(function () {
    'use strict';
    angular
        .module('app.contact',[
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
        $routeProvider.when('/contact',{
            templateUrl: 'app/contact/contact.html',
            controller: 'Contact',
            controllerAs: 'vm',
            title: 'Contact'
        });
    }
})();
