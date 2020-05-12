const enhancer = require('./enhancer.js');
// test away!

describe("enhancer unit tests", () => {
    it("succeeds", () => {
        expect(enhancer.succeed().toBe())
    })

    it("fails", () => {
        expect(enhancer.fail().toBe())
    })

    it("repairs", () => {
        expect(enhancer.repair().toBe())
    })

    it("gets", () => {
        expect(enhancer.get().toBe())
    })
})