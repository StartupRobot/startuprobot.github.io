/**
 * Created by tremaine on 12/29/15.
 */
(function(){
    angular
        .module('app.home')
        .controller('Home', Home);
  
  Home.$inject = ['scrollService'];
    /**
     *
     * @constructor
     */
    function Home(scrollService){
        var vm = this;

        vm.goTo = function(location){
            scrollService.scrollTo(location);
        }
    }
})();
