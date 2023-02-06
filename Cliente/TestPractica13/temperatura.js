export class Temperatura {
    convertir(temp, tipo = TipoConversion.C) {
        if (tipo == TipoConversion.C) {
            return (temp - 32) / 1.8;
        }
        else {
            return temp * 1.8 + 32;
        }
    }
}
export var TipoConversion;
(function (TipoConversion) {
    TipoConversion[TipoConversion["C"] = 0] = "C";
    TipoConversion[TipoConversion["F"] = 1] = "F";
})(TipoConversion || (TipoConversion = {}));
