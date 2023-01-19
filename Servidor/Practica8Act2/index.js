const funciones = require("./funciones.js");
const argvs = process.argv;
const argv = argvs.slice(2);
var opcion = parseInt(argv[0]);
var num1 = parseInt(argv[1]);
var num2 = parseInt(argv[2]);

switch(opcion){
    case 1:
        console.log(`El resultado de la suma de ${num1} + ${num2} es ${funciones.sumar(num1,num2)}`);
        break;
    case 2:
        console.log(`El resultado de la resta de ${num1} - ${num2} es ${funciones.restar(num1,num2)}`);
        break;
    case 3:
        console.log(`¿El numero ${num1} es primo?  ${funciones.esPrimo(num1)}`);
        break;
    case 4:
        console.log(`¿El numero ${num1} es par?  ${funciones.esPar(num1)}`);
        break;
    case 5:
        console.log(`El resultado del factorial de ${num1} es ${funciones.factorial(num1)}`);
        break;
    default:
        console.log("opcion no valida");
        break;
}
