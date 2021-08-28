import { expect } from 'chai';

describe('operations with numbers', function () {
    const a = 2;
    const b = 7;

    it('addition works correctly', function () {
       expect( a + b, 'result must equal 9').to.eq(9);
    })

    it ('subtraction works correctly', function () {
        expect( a - b, 'result must equal -5').to.eq(-5);
    })
})