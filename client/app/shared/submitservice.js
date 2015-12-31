/**
 * Created by tremaine on 12/30/15.
 *
 */
(function () {
    'use strict';
    angular
        .module('app.shared_services',[])
        .factory('submitService', submitService);

    submitService.$inject = ['_', '$http'];
    /**
     * Services to allow submission of data to an API
     *
     * @param _ UnderscoreJs library
     * @param $http - Core Angular service facilitating server communication
     * @returns {{submitForm: submitForm, transform: transform}}
     */
    function submitService(_, $http){
        var service = {
            submitForm: submitForm,
            transform: transform
        };
        return service;
        /**
         * Handles submission form data to external service.
         * @param data - Form data to be submitted
         */
        function submitForm(data){
            var prospect = transform(data),
                url = 'https://googleapps.insight.ly/WebToLead/Create';
            return $http.post(url, prospect)
                .then(postComplete)
                .catch();

            function postComplete(response){
                console.log('Completed');
            }
        }
        /***
         * Formats data for submission to external API service.
         * @param data
         * @returns {*} - Formatted data to be sent
         */
        function transform(data){
          var transformedData = {},
              space = ' ',
              name = data.name.split(space),
              services = getRequestedServices(data);
            transformedData.formId = 'ayoXdgRJElVfaWGwaPILXA==';
            transformedData.FirstName = name[0] || 'Not Given';
            transformedData.LastName = name[1] || 'Not Given';
            transformedData.email = data.email;
            transformedData.phone = data.phone;
            transformedData.LeadSource = 466760;
            transformedData.ResponsibleUser = 962072;
            transformedData.Description = "Custom Request:" + data.custom + " Services:" + services.toString();
            return transformedData;
        }
        /**
         * Returns services requested by the user.
         * @param data - Data captured by the form
         * @returns {Array} - List of services selected by the user
         */
        function getRequestedServices(data){
            var services = ['business', 'company', 'tcc', 'ncc', 'trademarking', 'other'],
                i = services.length,
                requested_service = [];
            while(i--){
              if(_.has(data, services[i])){
                  requested_service.push(services[i]);
              }
            }
            return requested_service;
        }
    }
})();
