var app = angular.module("dpApp", []);

app.directive("dumbPassword", function () {
    var validElement = angular.element("<div>{{model.input}}</div>");

    this.link = function (scope) {
        scope.$watch("model.input", function (value) {
            if(value == "password") {
                validElement.toggleClass("alert-box alert");
                console.log("change it!");
            }
        })
    };

    return {
        restrict: "E",
        replace:true,
        template: "<div>\n    <input type=\"text\" ng-model=\'model.input\'/>\n    \n</div>",
        compile: function (tElem) {
            tElem.append(validElement);

            return link;
        }
        //link: function (scope, element) {
        //    scope.$watch("model.input", function (value) {
        //        if(value == "password") {
        //            element.children(1).toggleClass("alert-box alert");
        //            console.log("change it!");
        //        }
        //    })
        //}
    }
});
