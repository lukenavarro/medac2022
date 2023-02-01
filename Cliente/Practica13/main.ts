import { grados } from "./conversionGrados";
import { conversionGrados } from "./conversionGrados";

function convertirGrados(){
let solucion : HTMLElement = document.getElementById("solucion") as HTMLElement;
let valor:number = parseInt((<HTMLInputElement> document.getElementById("grados")).value);
if(document.getElementById("celsius")?.ariaChecked){
    solucion.innerHTML += conversionGrados.convertirGrados(valor,grados.C);
}else{
    solucion.innerHTML += conversionGrados.convertirGrados(valor,grados.F);
}
}