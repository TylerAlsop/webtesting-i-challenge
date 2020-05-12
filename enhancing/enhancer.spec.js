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
            name: Car,
            durability: 10,
            enhancement: 1
        }).toBe({
            name: Car,
            durability: 100,
            enhancement: 1
        }))
    })

    // it("gets", () => {
    //     expect(enhancer.get().toBe())
    // })
})