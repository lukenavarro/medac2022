// Exportacion de las funciones
module.exports = {sumar, restar, esPrimo, esPar, factorial};
// Funciones basicas del programa

function sumar(num1, num2){
    return num1+num2;
}
function restar(num1, num2){
    return num1-num2;
}
function esPrimo(num1){
    if(num1 == 0 || num1== 1 || num1 == 4) return false;
    for(let i = 2; i <=num1/2;i++){
        if(num1%i === 0){
            return false;
        }
    }
    return true;
}
function esPar(num1){
    return num1%2==0 ? true:false;
}
function factorial(num1){
    let resultado = 1; 
    for(let i = 1;i <= num1;i++){
        resultado *= i;
    }
    return resultado;
}