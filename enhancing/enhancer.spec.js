const enhancer = require('./enhancer.js');
// test away!

describe("enhancer unit tests", () => {

///////////// SUCCEEDS /////////////

    it("succeeds", () => {
        expect(enhancer.succeed({
            name: "Car",
            durability: 20,
            enhancement: 2
        })).toEqual({
            name: "Car",
            durability: 20,
            enhancement: 3      
        })

    })
        
    it("succeeds", () => {
        expect(enhancer.succeed({
            name: "Plane",
            durability: 20,
            enhancement: 20
        })).toEqual({
            name: "Plane",
            durability: 20,
            enhancement: 20      
        })

    })

///////////// FAILS /////////////


    // it("fails", () => {
    //     expect(enhancer.fail().toBe())
    // })


///////////// REPAIRS /////////////


    it("repairs", () => {
        expect(enhancer.repair({
            name: "Car",
            durability: 20,
            enhancement: 2
        })).toEqual({
            name: "Car",
            durability: 100,
            enhancement: 2      
        })

    })
        
    it("repairs", () => {
        expect(enhancer.repair({
            name: "Plane",
            durability: 20,
            enhancement: 20
        })).toEqual({
            name: "Plane",
            durability: 100,
            enhancement: 20      
        })

    })


///////////// GETS /////////////


    // it("gets", () => {
    //     expect(enhancer.get().toBe())
    // })
})