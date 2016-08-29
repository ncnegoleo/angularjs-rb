var app = angular.module("uiRbComponents", []);

app.run(function ($templateCache) {
    $templateCache.put("view/accordion.html",
        '<div class="ui-accordion-title" ng-click="open()"> ' +
        '{{title}}' +
        '   <span class="glyphicon glyphicon-chevron-up" ng-show="isOpened"></span>' +
        '   <span class="glyphicon glyphicon-chevron-down" ng-show="!isOpened"></span> ' +
        '</div> ' +
        '<div class="ui-accordion-content" ng-transclude ng-show="isOpened"></div>'
    );
    $templateCache.put("view/alert.html",
        '<div class="ui-alert">' +
        '   <div class="ui-alert-title">{{title}} </div>' +
        '   <div class="ui-alert-message" ng-transclude></div>' +
        '</div>'
    );
});

/**
 *
 */
app.directive('uiAccordions', function () {
    return {
        controller: function ($scope, $element, $attrs) {
            var accordions = [];
            this.registerAccordions = function (accordion) {
                accordions.push(accordion);
            };
            this.closeAll = function () {
                accordions.forEach(function (accordion) {
                    accordion.isOpened = false;
                });
            };
        },
    };
});

/**
 *
 */
app.directive('uiAccordion', function () {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@",
        },
        require: "^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordions(scope)
            scope.open = function () {
                if (!scope.isOpened) {
                    ctrl.closeAll();
                    scope.isOpened = true;
                } else {
                    ctrl.closeAll();
                }
            };
        },
    };
});

/**
 *
 */
app.directive('uiAlert', function () {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "E",
        scope: {
            title: "@",
        },
        transclude: true,
    };
});