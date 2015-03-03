/**
 * Created by troy on 3/2/15.
 */
var app = angular.module("directiveApp", []);

app.directive("ehSimple", function () {
    return {
        scope:{},
        link: linkFn
    }
    function linkFn(scope, element) {
        element.addClass("plain");

        element.bind("click", function () {
            scope.clicked = true;
        })
    }
})