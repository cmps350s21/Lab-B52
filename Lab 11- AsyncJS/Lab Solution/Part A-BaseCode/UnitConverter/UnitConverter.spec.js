import {expect} from "chai";
import unitConverter from './UnitConverter.js'

describe('Unit Test for UnitConverter Class', () => {

    describe('Weight Measuring Methods Test' , ()=>{
        it('1kg to Ounce should be 35.274', () => {
            expect(unitConverter.kgToOunce(1)).equal(35.274)
        });
        it('1kg to Pound should be 4.4092', () => {
            expect(unitConverter.kgToPound(2)).equal(4.4092)
        });
    })

    describe('Distance measuring methods', ()=>{
        it('1m to Inch should be 39.3701', () => {
            expect(unitConverter.meterToInch(1)).equal(39.3701)
        });
    })
})