import {expect} from "chai";
import unitConverter from './UnitConverter.js'

describe('Unit Test for UnitConverter Class', () => {

    describe('Weight Measuring Methods Test', () => {
        it('1kg to Ounce should be 35.274', () => {
            expect(unitConverter.kgToOunce(1)).equal(35.274)
        });
        it('1kg to Pound should be 4.4092', () => {
            expect(unitConverter.kgToPound(2)).equal(4.4092)
        });
    })

    describe('Distance testing cases', () => {
        it('1 meterToInch should be 39.3701 ', async () => {

            expect(unitConverter.meterToInch(1)).equal(39.3701)
        });

        it('2 meterToFoot should be 6.5617 ', async () => {
            expect(unitConverter.meterToFoot(2)).equal(6.5617)
        });
    })
})