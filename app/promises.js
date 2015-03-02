var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl:"promises.app.html",
            controller:"AppCtrl"
        })
});

app.controller("AppCtrl", function ($scope, $q) {

    var defer = $q.defer();

    defer.promise.then(function (weapon) {
        console.log("you can have my " + weapon);

        return "bow";
    }).then(function (weapon) {
        console.log("And my " + weapon);

        return "axe";
    }).then(function (weapon) {
        console.log("And my " + weapon);
    }).then(function () {
        alert("Fellowship is here");
    })

    $scope.model = {
        message:"This is my app!!!"
    }

    defer.resolve("sword");
})