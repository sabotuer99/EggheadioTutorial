var app = angular.module("app", []);

//app.controller("MyCtrl", function ($scope, $http, $parse) {
//    console.log($scope);
//    console.log($http);
//    console.log($parse);
//});

app.controller("MyCtrl", ['$scope', '$http', function (a, b) {
    console.log(a);
    console.log(b);
}]);

app.directive("myDirective", function () {
    return {
        scope: {},
        link: function (scope, element, attrs) {
            console.log(scope);
            console.log(element);
            console.log(attrs);
        }
    }
});
