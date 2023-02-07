import { Temperatura, TipoConversion } from "./temperatura.js";

document.getElementById("btn").addEventListener(
    "click",
    convertir
);

function convertir(){

    let valor = document.getElementsByName("valor")[0].value;
    let tipo = document.getElementsByName("tipo")[0].value;

    let temperatura = new Temperatura();
    let tipoTemp  = (tipo == "C") ? TipoConversion.C:TipoConversion.F;
    let resultado =  temperatura.convertir(valor,tipoTemp);

    document.getElementById("resultado").innerHTML=resultado;

    return false;
}
