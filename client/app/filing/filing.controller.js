/**
 * Created by tremaine on 12/30/15.
 */
(function () {
    angular
        .module('app.filing')
        .controller('Filing', Filing);

    Filing.$inject = ['submitService'];
    /**
     * Controller defined to process service request form.
     * @param submitService - Handles submission of form collected data.
     * @constructor
     */
    function Filing(submitService){
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
