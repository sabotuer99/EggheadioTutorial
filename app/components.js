var app = angular.module("app", ['ngRoute']);

app.config(function ($logProvider) {
    $logProvider.debugEnabled(false);
});

app.run(function ($rootScope, $log) {
    $rootScope.$log = $log;
});

app.controller("foo", function ($scope){
    $scope.myFunc = function (ev) {
        console.log("myFunc", ev);
    }
})

//app.directive("clock", function () {
//    return {
//        restrict: "E",
//        scope: {
//            timezone: "@"
//        },
//        template: "<div>12:00PM {{timezone}}</div>"
//    }
//});
//
//app.directive("panel", function () {
//    return {
//        restrict: "E",
//        transclude: true,
//        scope:{
//        title: "@"
//        },
//        template: "<div style=\"border: 3px solid #000000\">\n    <div class=\"alert-box\">{{title}}</div>\n    <div ng-transclude></div>\n</div>"
//    }
//});