/**
 * Created by tremaine on 12/30/15.
 */
(function(){
    'use strict';
    angular
        .module('underscore',[])
        .factory('_', _);
    /**
     * Allows Angular to utilize UnderscoreJs exposed as a factory.
     * @returns {*} Reference to the UnderscoreJs library.
     */
    function _(){
        return window._;
    }
})();
