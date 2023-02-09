import { Temperatura, TipoConversion } from "./temperatura.js";

document.getElementById("btn").addEventListener(
    "click",
    convertir
);

function convertir(){

    let valor = document.getElementsByName("valor")[0].value;
    let tipos = document.getElementsByName("tipo");
    let tipoTemp = null;
    let temperatura = new Temperatura();
    console.log(tipos);
    for(let radio of tipos){
        if(radio.checked){
            tipoTemp = radio.value;
        }
    }
    let tipoConvrs  = (tipoTemp == "C") ? TipoConversion.C:TipoConversion.F;
    let resultado =  temperatura.convertir(valor,tipoConvrs);

    document.getElementById("resultado").innerHTML=resultado;

    return false;
}
