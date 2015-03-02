var app = angular.module("templateUrl", []);

app.run(function ($templateCache) {
    $templateCache.put("zippyput.html", "<div> <h3 ng-click='toggleContent()'>{{title}}</h3> <div ng-show='isContentVisible' ng-transclude> </div>This is the injected template </div>")
});

app.directive("zippy", function ($templateCache) {
    console.log($templateCache.get("zippy.html"));

    return {
        restrict: "E",
        transclude: true,
        scope: {
            title: "@"
        },
        //templateUrl: 'templateUrl.zippy.html',
        template: $templateCache.get("zippyput.html"),
        link: function (scope) {
            scope.isContentVisible = false;

            scope.toggleContent = function () {
                scope.isContentVisible = !scope.isContentVisible;
            };
        }
    }
})
