/**
 * Created by tremaine on 12/29/15.
 */
(function(){
    angular
        .module('app.home')
        .controller('Home', Home);
    /**
     *
     * @constructor
     */
    function Home(){
        var vm = this;
        vm.section = "intro-section";
    }
})();
