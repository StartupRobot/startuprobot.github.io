/**
 * Created by tremaine on 12/30/15.
 *
 */
(function () {
    'use strict';
    angular
        .module('app.shared_services',[])
        .factory('submitService', submitService);

    submitService.$inject = ['_', '$http', '$location'];
    /**
     * Services to allow submission of data to an API
     *
     * @param _ UnderscoreJs library
     * @param $http - Core Angular service facilitating server communication
     * @returns {{submitForm: submitForm, transform: transform}}
     */
    function submitService(_, $http, $location){
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
                api_key = 'Basic 7950a81a-03eb-4373-91cc-05e1dc1aa0d5',
                url = 'https://api.insight.ly/v2.2/';
            return $http.post(url, prospect, {headers: {'Authorization': api_key}})
                .then(postComplete)
                .catch(postError);

            function postComplete(response){
                $location.path('/complete');
            }

            function postError(response){
                console.log(response);
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
            //transformedData.formId = 'ayoXdgRJElVfaWGwaPILXA==';
            transformedData.FIRST_NAME = name[0] || 'Not Given';
            transformedData.LAST_NAME = name[1] || 'Not Given';
            transformedData.EMAIL = data.email;
            transformedData.PHONE = data.phone;
            //transformedData.LeadSource = 466760;
            //transformedData.ResponsibleUser = 962072;
            transformedData.LEAD_DESCRIPTION = "Custom Request:" + data.custom + " Services:" + services.toString();
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
