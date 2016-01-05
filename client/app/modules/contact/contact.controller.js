/**
 * Created by tremaine on 12/30/15.
 */
(function () {
    angular
        .module('app.contact')
        .controller('Contact', Contact);

    Contact.$inject = ['submitService', '$location'];
    /**
     * Controller defined to process service request form.
     * @param submitService - Handles submission of form collected data.
     * @constructor
     */
    function Contact(submitService, $location){
        var vm = this;
        vm.client = {};
        /**
         * Invoked upon submission of the form.
         */
        vm.submit = function(){
            submitService.submitForm(vm.client);
        };
    }
})();
