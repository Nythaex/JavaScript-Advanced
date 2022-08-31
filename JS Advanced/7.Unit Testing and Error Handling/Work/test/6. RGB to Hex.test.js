const rgbToHexColor = require('../6. RGB to Hex');
const expect = require('chai').expect;

describe('rgb tests', () => {
    it('negative input green', () => {
        let [green, red, blue] = [-11, 3, 65];
        let result = rgbToHexColor(red, green, blue)
        expect(result).to.be.undefined;

    })
    it('bigger range input green', () => {
        let [green, red, blue] = [267, 3, 65];
        let result = rgbToHexColor(red, green, blue)
        expect(result).to.be.undefined;

    })


    it('string input green', () => {
        let [green, red, blue] = ['fs', 3, 65];
        let result = rgbToHexColor(red, green, blue)
        expect(result).to.be.undefined;

    })
    it('array input blue', () => {
        let [green, red, blue] = [52, [],41];
        let result = rgbToHexColor(red, green, blue)
        expect(result).to.be.undefined;

    })

    it('function input blue', () => {
        let [green, red, blue] = [5, 3,()=>{
            return 2;
        }];
        let result = rgbToHexColor(red, green, blue)
        expect(result).to.be.undefined;

    })

    it('valid inputs', () => {
        let [green, red, blue] = [32, 65, 31];
        let result = rgbToHexColor(red, green, blue)
        expect(result).equal('#41201F')

    })
    it('valid inputs return white', () => {
        let [green, red, blue] = [255, 255, 255];
        let result = rgbToHexColor(red, green, blue)
        expect(result).equal('#FFFFFF')

    })
    it('valid inputs return black', () => {
        let [green, red, blue] = [0, 0, 0];
        let result = rgbToHexColor(red, green, blue)
        expect(result).equal('#000000')

    })
})