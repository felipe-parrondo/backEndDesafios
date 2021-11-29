var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function operacion(n1, n2, op) {
    return __awaiter(this, void 0, void 0, function () {
        var modulo, suma, resultado, modulo, resta, resultado;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(op === "suma")) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return require("./src/Suma/suma"); })];
                case 1:
                    modulo = _a.sent();
                    suma = new modulo.Suma(n1, n2);
                    resultado = suma.resultado();
                    return [2 /*return*/, Promise.resolve(resultado)];
                case 2: return [4 /*yield*/, Promise.resolve().then(function () { return require("./src/Resta/resta"); })];
                case 3:
                    modulo = _a.sent();
                    resta = new modulo.Resta(n1, n2);
                    resultado = resta.resultado();
                    return [2 /*return*/, Promise.resolve(resultado)];
            }
        });
    });
}
var cPrueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var operaciones = function () {
    var n1 = Math.random();
    n1 = cPrueba[n1 * 10]; // redundante hacer esto cuando son literalmente numeros del 1 al 10 en el array, pero para cumplir la consigna al pie de la letra
    var n2 = Math.random();
    n2 = cPrueba[n2 * 10];
    var opSelector = Math.random();
    opSelector = opSelector * 10;
    var op;
    if (opSelector < 5) {
        op = "suma";
    }
    else {
        op = "resta";
    }
    console.log("Se " + op + " el numero " + n1 + " y el numero " + n2);
    operacion(n1, n2, op);
};
operaciones();
