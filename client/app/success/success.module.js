(function () {
    angular
        .module('app.success',[])
        .config(config);

    function config($routeProvider){
        $routeProvider
            .when('/complete',{
                templateUrl: 'app/success/success.html',
                controller:'Success',
                controllerAs: 'vm'
            }).when('/proof', {
                templateUrl: 'app/success/proof.html',
                controller: 'Success',
                controllerAs: 'vm'
            });
    }
})();
