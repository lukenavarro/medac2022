"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conversionGrados_1 = require("./conversionGrados");
const conversionGrados_2 = require("./conversionGrados");
function convertirGrados() {
    var _a;
    let solucion = document.getElementById("solucion");
    let valor = parseInt(document.getElementById("grados").value);
    if ((_a = document.getElementById("celsius")) === null || _a === void 0 ? void 0 : _a.ariaChecked) {
        solucion.innerHTML += conversionGrados_2.conversionGrados.convertirGrados(valor, conversionGrados_1.grados.C);
    }
    else {
        solucion.innerHTML += conversionGrados_2.conversionGrados.convertirGrados(valor, conversionGrados_1.grados.F);
    }
}
