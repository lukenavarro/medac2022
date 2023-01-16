function funcionPrueba() {
    //Declaracion variable
    var numeroPrueba;

    //Lectura de lo que contiene el inputo con id = inputPrueba
    numeroPrueba = document.querySelector("#inputPrueba").value;

    //Si queremos un number, parseamos a number lo que contiene la variable numeroPrueba
    numeroPrueba = parseInt(numeroPrueba);

    //Escribimos en el parrafo con id = parrafoPrueba lo que contiene la variable numeroPrueba
    document.querySelector("#parrafoPrueba").innerHTML = "El valor es " + numeroPrueba;

}

function funcionPrueba2() {
    //Limpio lo que tenga parrafoPrueba2
    document.querySelector("#parrafoPrueba2").innerHTML = "";

    //Declaracion variable
    var numeroPrueba2;

    //Lectura de lo que contiene el inputo con id = inputPrueba
    numeroPrueba2 = document.querySelector("#inputPrueba2").value;

    //Si queremos un number, parseamos a number lo que contiene la variable numeroPrueba
    numeroPrueba2 = parseInt(numeroPrueba2);

    //Escribimos en el parrafo con id = parrafoPrueba lo que contiene la variable numeroPrueba
    for (let i = 0; i <= numeroPrueba2; i++) {
        document.querySelector("#parrafoPrueba2").innerHTML += "El valor es " + i + "<br>";
    }
}

function ejercicio1(){
    for(let i =1;i<=20;i++){
        document.querySelector("#parrafoEjercicio1").innerHTML += i + "<br>";
    }
}

function ejercicio2(){
    let salida = "";
    for(let i =1;i<=100;i++){
        if(i%2===0){
            salida+=i+"<br>"
        }
    }
    document.querySelector("#parrafoEjercicio2").innerHTML+= salida;
}

function ejercicio3(){
    let resultado=1;
    let numeroInicial = parseInt(prompt("Numero N para hacer el factorial"));
    for(let i =1;i<=numeroInicial;i++){
        resultado=resultado*parseInt(i);
    }
    document.querySelector("#parrafoEjercicio3").innerHTML += "El resultado de "+numeroInicial+"! es ="+resultado + "<br>";
}

function ejercicio4(){
    let exponente = parseInt(prompt("introduce el exponente de dos elevado a:"));
    let resultado =1;
    for(let i = 1; i<=exponente;i++){
        resultado=resultado*2;
    }
    document.querySelector("#parrafoEjercicio4").innerHTML+= "El resultado de dos elevado a "+exponente+" es = "+resultado+"<br>";
}

function ejercicio5(){
    let dinero = document.querySelector("#dinero").value;
    let billete500 = 0;
    let billete200 = 0;
    let billete100 = 0;
    let billete50 = 0;
    let billete20 = 0;
    let billete10 = 0;
    let billete5 = 0;

    while(dinero>=5){
        if(Math.floor(dinero/500)>0){
            billete500=Math.floor(dinero/500);
            dinero = dinero -(500*billete500);
        }else if(Math.floor(dinero/200)>0){
            billete200=Math.floor(dinero/200);
            dinero = dinero -(200*billete200);
        }else if(Math.floor(dinero/100)>0){
            billete100=Math.floor(dinero/100);
            dinero = dinero -(100*billete100);
        }else if(Math.floor(dinero/50)>0){
            billete50=Math.floor(dinero/50);
            dinero = dinero -(50*billete50);
        }else if(Math.floor(dinero/20)>0){
            billete20=Math.floor(dinero/20);
            dinero = dinero -(20*billete20);
        }else if(Math.floor(dinero/10)>0){
            billete10=Math.floor(dinero/10);
            dinero = dinero -(10*billete10);
        }else if(Math.floor(dinero/5)>0){
            billete5=Math.floor(dinero/5);
            dinero = dinero - (5*billete5);
        }
        console.log(dinero);

    }

    document.querySelector("#parrafoEjercicio5").innerHTML += "Se devuelven "+billete500+" billetes de 500, "+billete200+" billetes de 200, "+billete100+" billetes de 100, "+billete50+" billetes de 50, "+billete20+" billetes de 20, "+billete10+" billetes de 10, "+billete5+" billetes de 5 y se queda sin devolver :"+dinero+"<br>";  
}