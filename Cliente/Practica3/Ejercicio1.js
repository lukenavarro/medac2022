/*
Escribe un programa que lee 2 números y muestra el mayor (2 ptos).
*/

var num1 = parseInt(prompt("Introduzca un numero"));

var num2 = parseInt(prompt("Introduzca un numero"));

if (num1 < num2) {
  document.write("El numero mayor es el numero 2: " + num2);
} else {
  document.write("El numero mayor es el numero 1: " + num1);
}
