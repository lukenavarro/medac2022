import { Temperatura, TipoConversion } from "./temperatura.js";

document.getElementById("btn").addEventListener(
    "click",
    convertir
);

function convertir(){

    let valor = document.getElementsByName("valor")[0].value;
    let tipo = document.getElementsByName("tipo")[0].value;
    let resultado = "";
    let temperatura = new Temperatura();
    if(document.getElementById("C").checked){
        resultado = temperatura.convertir(valor,TipoConversion.C);
    }else{
        resultado = temperatura.convertir(valor,TipoConversion.F);
    }

    document.getElementById("resultado").innerHTML=resultado;

    return false;
}
