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
