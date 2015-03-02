var app = angular.module("app", ['ngRoute']);

app.factory("game", function () {
    return {
        title: "Starcraft"
    }
});

//angular.injector(["app"]).invoke(function (game){
//    alert(game.title);
//});

app.controller("AppCtrl", function ($scope, game, $injector) {

    $injector.invoke(function (game){
        alert(game.title);
    });

    $scope.title = game.title
});


//app.provider("game", function () {
//    return {
//        setType: function (value) {
//            type = value
//        },
//        $get: function () {
//            return {
//                title: type + "Craft"
//            }
//        }
//    }
//});

//app.config(function ($provide) {
//app.config(function (gameProvider) {
//   gameProvider.setType("Flower");
//});
    //Factory version
    //$provide.factory("game", function () {
    //    return {
    //        title: "StarCraft"
    //    }
    //});

    //Provider version
    //$provide.provider("game", function () {
    //    return {
    //        $get: function () {
    //            return {
    //                title: "StarCraft"
    //            }
    //        }
    //    }
    //});

//});



