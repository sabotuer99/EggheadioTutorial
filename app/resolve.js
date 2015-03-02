var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl:"view/app.html",
            controller:"ViewCtrl",
            resolve: {
                loadData: viewCtrl.loadData//,
                //prepData: appCtrl.prepData
            }
        })
});

app.directive("error", function ($rootScope){
    return {
        restrict: "E",
        template: "<div class=\"alert-box alert\" ng-show=\"isError\">Error!!!</div>",
        link: function (scope) {
            $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
                scope.isError = true;
            })
        }
    }
});

app.controller("AppCtrl", function ($rootScope) {
   $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
       console.log("failed to change routes");
       console.log(rejection);
       console.log(current);
       console.log(previous);
       console.log(event);
   })
});

var viewCtrl = app.controller("ViewCtrl", function ($scope, $route) {
    console.log($route);
    $scope.model = {
        message: "I'm a great app!"
    }
});

viewCtrl.loadData = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function (){
        defer.resolve("your network is down");
        console.log("loadData");
    },2000);
    return defer.promise;
};

//appCtrl.prepData = function ($q, $timeout) {
//    var defer = $q.defer();
//    $timeout(function (){
//        defer.resolve("prepData");
//        console.log("prepData");
//    },3000);
//    return defer.promise;
//};