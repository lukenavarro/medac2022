/** 
 * Escribe un programa que lee un número y dice si es positivo o negativo. Consideramos 0, que debe decir que el número es 0 
*/
var numero = parseInt(prompt("Introduzca un numero"));

if(numero<0){
    document.write("El numero es menor que 0")
}
if(numero>0){
    document.write("El numero es mayor que 0");
}
if(numero===0){
    document.write("El numero es 0")
}