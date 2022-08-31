const flowerShop = require('../flowerShop');
const expect = require('chai').expect;


describe('Flower shop tests', () => {

    describe('calcPriceOfFlowers', () => {

        it('invalid flower parameter', () => {
            expect(() => flowerShop.calcPriceOfFlowers(2, 3, 4)).to.throw(Error, 'Invalid input!')
        })

        it('invalid price parameter', () => {
            expect(() => flowerShop.calcPriceOfFlowers('asf', 'asf', 4)).to.throw(Error, 'Invalid input!')
        })

        it('invalid price float parameter', () => {
            expect(() => flowerShop.calcPriceOfFlowers('asf', 2.3, 4)).to.throw(Error, 'Invalid input!')
        })


        it('invalid quantity parameter', () => {
            expect(() => flowerShop.calcPriceOfFlowers('asf', 3, 'asf')).to.throw(Error, 'Invalid input!')
        })

        it('invalid quantity float parameter', () => {
            expect(() => flowerShop.calcPriceOfFlowers('asf', 2, 4.2)).to.throw(Error, 'Invalid input!')
        })

        it('valid result', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 3, 2)).equals(`You need $6.00 to buy Rose!`)
        })

        //possible zero inputs

    })
    describe('checkFlowersAvailable', () => {

        it('not contains the flower', () => {
            expect(flowerShop.checkFlowersAvailable('Bulgarian Rose', ["Rose", "Lily", "Orchid"])).equals('The Bulgarian Rose are sold! You need to purchase more!')
        })
        it('contains the flower', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).equals('The Rose are available!')
        })


    })
    describe('sellFlowers', () => {
        it('correct sold', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).equals('Rose / Orchid')
        })
        it('correct sold zero index', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).equals('Lily / Orchid')
        })
        it('correct sold zero last index', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).equals('Rose / Lily')
        })


        // and more types 
        it('invalid gardenArr parameter string', () => {
            expect(() => flowerShop.sellFlowers('asf', 1)).to.throw(Error, 'Invalid input!')
        })
        it('invalid gardenArr parameter int', () => {
            expect(() => flowerShop.sellFlowers(1, 1)).to.throw(Error, 'Invalid input!')
        })


        // and more types
        it('invalid space parameter string', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 'saf')).to.throw(Error, 'Invalid input!')
        })
        it('invalid space parameter double', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2.3)).to.throw(Error, 'Invalid input!')
        })


        it('lower space parameter', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw(Error, 'Invalid input!')
        })
        it('lower higher parameter', () => {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3)).to.throw(Error, 'Invalid input!')
        })

 
        
    })


})