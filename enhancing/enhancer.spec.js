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
//     expect(enhancer.fail({
//         name: "Car",
//         durability: 20,
//         enhancement: 2
//     })).toEqual({
//         name: "Car",
//         durability: 15,
//         enhancement: 2      
//     })

// })
    
// it("fails", () => {
//     expect(enhancer.fail({
//         name: "Plane",
//         durability: 20,
//         enhancement: 20
//     })).toEqual({
//         name: "Plane",
//         durability: 10,
//         enhancement: 19      
//     })

// })

// it("fails", () => {
//     expect(enhancer.fail({
//         name: "Train",
//         durability: 4,
//         enhancement: 20
//     })).toEqual({
//         name: "Train",
//         durability: 0,
//         enhancement: 19      
//     })

// })

// it("fails", () => {
//     expect(enhancer.fail({
//         name: "Bike",
//         durability: 4,
//         enhancement: 10
//     })).toEqual({
//         name: "Bike",
//         durability: 0,
//         enhancement: 10      
//     })

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