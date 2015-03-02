var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        //.when('/:message',
        //.when('/map/:country/:state/:city',
        {
            templateUrl:"views.app.html",
            controller:"AppCtrl"
        })
        .when('/pizza/:crust/:toppings', {
            //template:"Yum!!"
            redirectTo: function (routeParams, path, search){
                console.log(routeParams);
                console.log(path);
                console.log(search);
                return "/" + routeParams.crust;
            }
        })
        .when('/deep', {
        template: 'Deep Dish'
        })
        .otherwise({
            //template: "This doesn't exist!"
            redirectTo: function () {
                return "/"
            }
        })

});

app.controller("AppCtrl", function ($scope, $routeParams) {

    $scope.model = {
        message:"This is my app!!!"
        //message:$routeParams.message
        //message: "Address: " +
        //    $routeParams.country + ", " +
        //    $routeParams.state + ", " +
        //    $routeParams.city + ", "
    }
})