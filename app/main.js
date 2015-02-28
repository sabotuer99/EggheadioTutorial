/**
 * Created by troy on 2/28/15.
 */
var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
    return {message: "I'm data from a service"}
})

myApp.filter('reverse', function (Data) {
    return function (text) {
        return text.split("").reverse().join("");
    }
})

function FirstCtrl($scope, Data){
    $scope.data = Data;
}

function SecondCtrl($scope, Data){
    $scope.data = Data;

    $scope.reversedMessage = function (message) {
        return message.data.message.split("").reverse().join("");
    }
}