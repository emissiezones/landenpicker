'use strict';
(function(module) {
    try {
        module = angular.module('lez.landenpicker');
    } catch (e) {
        module = angular.module('lez.landenpicker', []);
    }
    module.factory('LezLandenService', ['BaseService', 'AppConfig', function (baseService, appConfig) {
        var url = appConfig.apiUrl + "landen";

        function _getAll() {
            return baseService.get(url);
        }
        
        return {
            getAll: _getAll
        };
    }]);
})();
