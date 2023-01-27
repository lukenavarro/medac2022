"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conversionGrados = exports.grados = void 0;
var grados;
(function (grados) {
    grados[grados["C"] = 1] = "C";
    grados[grados["F"] = 2] = "F";
})(grados = exports.grados || (exports.grados = {}));
class conversionGrados {
    static convertirGrados(numGrados, tipo = grados.C) {
        if (tipo == grados.C) {
            return ((numGrados * 9) / 5) + 32;
        }
        else {
            return ((numGrados - 32) * 5) / 9;
        }
    }
}
exports.conversionGrados = conversionGrados;
