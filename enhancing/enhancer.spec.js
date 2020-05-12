const enhancer = require('./enhancer.js');
// test away!

describe("enhancer unit tests", () => {
    // it("succeeds", () => {
    //     expect().toBe())
    // })

    // it("fails", () => {
    //     expect(enhancer.fail().toBe())
    // })

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

    // it("gets", () => {
    //     expect(enhancer.get().toBe())
    // })
})