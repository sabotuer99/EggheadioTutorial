var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function ($scope) {
    $scope.ctrlFlavor = "blackberry"
})

app.directive("drink", function () {
    return {
        template: '<div>{{flavor}}</div>',
 /*       scope:{
            flavor:"@"
        }*/
        scope:{
            flavor:"="
        }
/*        link: function (scope, element, attrs) {
            scope.flavor = attrs.flavor;
        }*/
    }
});