var app = angular.module("app", ['ngRoute']);

//app.run(function ($rootScope) {
//    $rootScope.random = Math.random();
//})

app.controller("AppCtrl", function () {
    this.random = Math.random();
});

app.directive("app", function () {
    return {
        restrict: "C",
        controller: "AppCtrl as app"
    }
});

angular.bootstrap(document.getElementById("container"), ["app"]);
angular.bootstrap(document.getElementById("container2"), ["app"]);