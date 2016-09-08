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
				ngChange: '=',
                ngModel: '=',
                taal: '@',
                empty: '@',
                label: '@',
                selectClass: '@'
            },
            bindToController: true,
            controllerAs: 'ctrl',
            templateUrl: 'templates/landenpicker.html',
            replace: true,
            controller: function() {
                var ctrl = this;
                ctrl.label = ctrl.label ? ctrl.label : "Kies een land";
                ctrl.empty = ctrl.empty ? ctrl.empty : "- kies een land";
                ctrl.taal = ctrl.taal ? ctrl.taal.toLowerCase() : "nl";
                
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
    "<div>\n" +
    "<label for=landenpicker class=form-div ng-if=\"ctrl.label.length > 0\">{{ctrl.label}}</label>\n" +
    "<div class=select>\n" +
    "<select id=landenpicker ng-change=ctrl.ngChange ng-model=ctrl.ngModel class={{ctrl.selectClass}} ng-options=\"land.isoAlpha2 as land.{{ctrl.taal}}_short for land in ctrl.landen | orderBy:'{{ctrl.taal}}_short'\">\n" +
    "<option value=\"\">{{ctrl.empty}}</option>\n" +
    "</select>\n" +
    "</div>\n" +
    "</div>"
  );

}]);
