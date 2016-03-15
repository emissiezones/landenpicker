'use strict';
(function(module) {
    try {
        module = angular.module('lez.landenpicker');
    } catch (e) {
        module = angular.module('lez.landenpicker', []);
    }
    module.directive('lezLandenpicker', ['LezLandenService', function (landenService) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                empty: '@',
                label: '@'
            },
            bindToController: true,
            controllerAs: 'ctrl',
            templateUrl: 'templates/landenpicker.html',
            replace: true,
            controller: function() {
                var ctrl = this;
                ctrl.label = ctrl.label ? ctrl.label : "Kies een land";
                ctrl.empty = ctrl.empty ? ctrl.empty : "- kies een land";
                
                function initialize() {
                    landenService.getAll().then(function(response){ 
                        ctrl.landen = response.listOfLandCodeModel;
                    });
                }
                
                initialize();
            }
        };
    }]);
})();
;'use strict';
(function(module) {
    try {
        module = angular.module('lez.landenpicker');
    } catch (e) {
        module = angular.module('lez.landenpicker', []);
    }
    module.factory('LezLandenService', ['BaseService', 'appConfig', function (baseService, appConfig) {
        var url = appConfig.apiUrl + "landen/actief";

        function _getAll() {
            return baseService.get(url);
        }
        
        return {
            getAll: _getAll
        };
    }]);
})();
;angular.module('lez.landenpicker').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/landenpicker.html',
    "<div class=form-group> <label for=landenpicker>{{ctrl.label}}</label> <div class=select> <select id=landenpicker ng-model=ctrl.ngModel ng-options=\"land.nl_short for land in ctrl.landen\"> <option value=\"\">{{ctrl.empty}}</option> </select> </div> </div>"
  );

}]);
