const  arrayNumeros = [];

function ejercicio1Practica1(){
    let numerosRandom = parseInt(prompt("Introduzca la dimensión del array"));
    while(isNaN(numerosRandom)){
        numerosRandom = parseInt(prompt("Introduzca la dimensión del array"));
    }
    for(let i =0; i<=numerosRandom-1;i++){
        arrayNumeros.push(Math.floor(Math.random()*10));
    }
    let texto = "solucionEJ1";
    mostrarArray(texto,arrayNumeros);
}
function ejercicio2Practica1(){
    let suma =  arrayNumeros.reduce((previousValue, currentValue) => previousValue+currentValue);
    console.log("La media es: "+suma/arrayNumeros.length);
}
function ejercicio3Practica1(){
    let numerosMayores = arrayNumeros.filter(numero => numero > 5);
    console.log("Los numeros mayores de 5 son: "+numerosMayores);
}
function ejercicio4Practica1(){
    let solucion = arrayNumeros.map(numero => numero*2);
    console.log("Los numeros del array multiplicados por dos : "+solucion);
}
function mostrarArray(texto,array){
    for(let i = 0;i<=array.length-1;i++){
       console.log(array[i]+" ");
    }
}