const mul = require("../functions/mul")

describe("Prueba de la función de multiplicacion", () => {

    it("deberia devolver un NaN", () => {
        expect(mul("a", 3)).toBe("not a number")
    })
    
    it("deberia devolver un valor numérico", () => {
        expect(mul(2, 2)).toBe(4)
    })

    it("deberia devolver NaN", () => {
        expect(mul((Math.random * Math.random) * Math.random, 0)).toBe(NaN)
    })

    it("deberia devolver typeOf del tipo number", () => {
        expect(typeof(mul(1, 2))).toBe("number")
    })
})