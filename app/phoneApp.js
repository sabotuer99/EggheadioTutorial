var app = angular.module("phoneApp", []);

var phoneAppStuff = {};

phoneAppStuff.controllers = {};
phoneAppStuff.controllers.AppCtrl = function ($scope) {
    this.sayHi = function () {
        alert("hi");
    };

    return $scope.AppCtrl = this;
};

phoneAppStuff.directives = {};
phoneAppStuff.directives.panel = function () {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel"> <div ng-transclude></div>This is a panel component</div> '
    }
};

app.directive(phoneAppStuff.directives);
app.controller(phoneAppStuff.controllers);



//
//app.controller("AppCtrl", function ($scope) {
//    $scope.leaveVoicemail = function (number, message) {
//        alert("Number: " + number + " said:" + message);
//    };
//
//    $scope.leaveVoicemailHome = function (number, message) {
//        alert("Home! Number: " + number + " said:" + message);
//    };
//
//    this.sayHi = function () {
//        alert("hi");
//    };
//
//    return $scope.AppCtrl = this;
//})
//
//app.directive("phone", function () {
//    return {
//        restrict: "E",
//        scope:{
//            number:"@",
//            network:"=",
//            makeCall:"&"
//        },
//        template: '<div class="panel">Number: {{number}}  Network: ' +
//            '<select ng-model="network">' +
//                '<option ng-repeat="network in networks">{{network}}</option>' +
//            '</select>' +
//            '</div>' +
//            '<input type="text" ng-model="value">' +
//            '<div class="button" ng-click="makeCall({number: number, message:value})">Call Home</div>',
//
//        link: function (scope) {
//            scope.networks = ["Verizon", "AT&T", "Sprint", "TMobile"];
//            scope.network = scope.networks[0]
//        }
//    }
//});
//
//app.directive("panel", function() {
//    return {
//        restrict: "E",
//        transclude: true,
//        template: '<div class="panel"> <div ng-transclude></div>This is a panel component</div> '
//    }
//});

/*app.controller("AppCtrl", function ($scope) {
 $scope.callHome = function (message) {
 alert(message)
 }
 })

 app.directive("phone", function () {
 return {
 scope:{
 dial:"&"
 },
 template: '<input type="text" ng-model="value">' +
 '<div class="button" ng-click="dial({message:value})">Call Home</div>'
 }
 })*/

