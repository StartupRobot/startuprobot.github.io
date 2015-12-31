/**
 * Created by tremaine on 12/30/15.
 */
(function(){
    angular
        .module('app.filing')
        .factory('serviceType', serviceType);

    function serviceType(){
        var service = {
            get: get
        };

        return service;

        function get(){
           return {
               "Business": true,
               "Company": false,
               "TCC": false,
               "NCC": false,
               "Trademark": false,
               "Other": false
           }
        }
    }
})();
