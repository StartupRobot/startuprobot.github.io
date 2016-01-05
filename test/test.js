/**
 * Created by tremaine on 1/4/16.
 */
describe('Home', function(){
    var $rootScope,
        $scope,
        controller;
    beforeEach(function(){
        module('app.home');

        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $injector.get('$scope');
            controller = $injector.get('$controller')('Home', {"scrollService": scrollService});
        });

        describe("Initialization", function(){
            it("Should initialize vm to this", function(){
                expect(vm).toEqual(this);
            });
        });
    })
});
