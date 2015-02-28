/**
 * Created by troy on 2/28/15.
 */
describe('filter', function () {
    beforeEach(module('myApp'));

    describe('reverse', function () {
        it('should reverse a string', inject(function (reverseFilter) {
                expect(reverseFilter('ABCD')).toEqual('DCBA');
                expect(reverseFilter('John')).toEqual('nhoJ');
            }))
    })
})