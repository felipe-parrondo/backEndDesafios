"use strict";
exports.__esModule = true;
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(n1, n2) {
        this.number1 = n1;
        this.number2 = n2;
    }
    Resta.prototype.resultado = function () {
        return this.number1 - this.number2;
    };
    return Resta;
}());
exports.Resta = Resta;
