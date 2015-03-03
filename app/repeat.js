var app = angular.module("app", ['ngAnimate']);

app.controller("AppCtrl", function () {
    this.things = ["one", "two", "three"];
    this.toggle = true;
})