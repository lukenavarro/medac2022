export var grados;
(function (grados) {
    grados[grados["C"] = 1] = "C";
    grados[grados["F"] = 2] = "F";
})(grados || (grados = {}));
export class conversionGrados {
    static convertirGrados(numGrados, tipo = grados.C) {
        if (tipo == grados.C) {
            return ((numGrados * 9) / 5) + 32;
        }
        else {
            return ((numGrados - 32) * 5) / 9;
        }
    }
}
