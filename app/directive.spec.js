/**
 * Created by troy on 3/2/15.
 */
describe("Hello world", function () {
    var element;
    var $scope;
    var $rootScope;
    var $compile;
    beforeEach(module("directiveApp"));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_
        $rootScope = _$rootScope_;
        $scope = _$rootScope_;
        element = angular.element("<div eh-simple>{{2 + 2}}</div>");
        element = $compile(element)($rootScope)
    }));

    it("should equal 4", function () {
        $scope.$digest();
        expect(element.html()).toBe("4");
    })

    describe("ehSimple", function () {
        it("should add a class of plain", function () {
            expect(element.hasClass("plain")).toBe(true);
        })

        it("should respond to a click", function () {
            element.triggerHandler("click");
            expect(element.isolateScope().clicked).toBe(true);
        })
    })
});

