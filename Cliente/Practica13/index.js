import { grados } from "./conversionGrados";
import { conversionGrados } from "./conversionGrados";
function convertirGrados() {
    var _a;
    let solucion = document.getElementById("solucion");
    let valor = parseInt(document.getElementById("grados").value);
    if ((_a = document.getElementById("celsius")) === null || _a === void 0 ? void 0 : _a.ariaChecked) {
        solucion.innerHTML += conversionGrados.convertirGrados(valor, grados.C);
    }
    else {
        solucion.innerHTML += conversionGrados.convertirGrados(valor, grados.F);
    }
}
