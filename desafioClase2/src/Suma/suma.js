"use strict";
exports.__esModule = true;
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(n1, n2) {
        this.number1 = n1;
        this.number2 = n2;
    }
    Suma.prototype.resultado = function () {
        return this.number1 + this.number2;
    };
    return Suma;
}());
exports.Suma = Suma;
