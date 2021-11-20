const res = require("../functions/res")

describe("Prueba de la función de resta", () => {

    it("deberia devolver un NaN", () => {
        expect(res("a", 3)).toBe("not a number")
    })
    
    it("deberia devolver un valor numérico", () => {
        expect(res(1, 2)).toBe(-1)
    })

    it("deberia devolver typeOf del tipo number", () => {
        expect(typeof(res(1, 2))).toBe("number")
    })
})