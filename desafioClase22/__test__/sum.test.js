const sum = require("../functions/sum")

describe("Prueba de la función de suma", () => {

    it("deberia devolver un NaN", () => {
        expect(sum("a", 3)).toBe("not a number")
    })
    
    it("deberia devolver un valor numérico", () => {
        expect(sum(1, 2)).toBe(3)
    })

    it("deberia devolver typeOf del tipo number", () => {
        expect(typeof(sum(1, 2))).toBe("number")
    })
})
