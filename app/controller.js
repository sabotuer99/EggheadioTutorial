var app = angular.module("app", ['ngRoute']);

app.controller("RoomCtrl", function () {
    this.openDoor = function () {
        alert("creak");
    }

    this.foo = "bar";

    this.buttonTitle = "I'm a button";
});

app.controller("OtherCtrl", function () {
    this.openDoor = function () {
        alert("creak");
    }

    this.foo = "baz";

    this.buttonTitle = "I'm a button";
});