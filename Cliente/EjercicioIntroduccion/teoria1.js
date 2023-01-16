console.log("Hola mundo");
alert("Esto funciona");
prompt("Introduce aqui algo");
console.error("Aqui no funciona");

/*
Declaración de variables: 
var
let
const
- (por defecto lo gestiona en var)
*/

var test1 = prompt("Esto si se va a guardar");
document.write("<p>"+test1+"</p>");

//if else

if(test1 == "a"){
    var test2 = "b"
}
console.log(test1+" "+test2);


//Funciones
var num1 = prompt("Dame un numero");
var num2 = prompt("Dame un numero");

function suma( num1, num2){
    let resultado = parseInt(num1)+parseInt(num2);
    document.write("<p>"+resultado+"</p>")
}

function onIniciar(){
    var otroNombre= prompt("Introduce un nombre");
    console.log(otroNombre);
    if(otroNombre=="Fran"){
        console.log("Hey whats up bro!")
    }
}
window.onload= onIniciar();
window.onload= suma(num1,num2);