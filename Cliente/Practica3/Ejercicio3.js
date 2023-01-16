/**
 * Escribe un programa que lea una calificación numérica entre 0 y 10 y la transforme en calificación alfabética de la siguiente manera (2 ptos):
 */


var num = parseFloat(prompt("Introduzca la nota del alumno"));
if(num >=0 && num<3){
    document.write("Muy Deficiente");
}else if(num>=3 && num<5){
    document.write("Insuficiente");
}else if(num>=5 && num<6){
    document.write("Bien");
}else if(num>=6 && num<9){
    document.write("Notable");
}else if(num>=9&&num<=10){
    document.write("Sobresaliente");
}else{
    document.write("Numero no valido");
}