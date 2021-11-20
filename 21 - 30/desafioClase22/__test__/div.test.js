const div = require("../functions/div")

describe("Prueba de la función de division", () => {

    it("deberia devolver un NaN", () => {
        expect(div("a", 3)).toBe("not a number")
    })
    
    it("deberia devolver un valor numérico", () => {
        expect(div(2, 2)).toBe(1)
    })

    it("deberia devolver typeOf del tipo number", () => {
        expect(typeof(div(1, 2))).toBe("number")
    })
    
    it("deberia devolver un Infinity", () => {
        expect(div(2, 0)).toBe(Infinity)
    })

    it("deberia devolver un -Infinity", () => {
        expect(div(2, -0)).toBe(-Infinity)
    })

    it("deberia devolver NaN", () => {
        expect(div((Math.random * Math.random) * Math.random, Infinity)).toBe(NaN)
    })
})