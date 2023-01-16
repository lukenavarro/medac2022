var palJuego;
var arrayPalJuego = [];

function confirmWord(){
    
    palJuego = document.querySelector("#palJuego").value;
    console.log("Palabra introducida: "+palJuego);

    for(let i=0; i<palJuego.length; i++){
        arrayPalJuego.push("__ ");
    }
    document.querySelector("#solucion").innerHTML = arrayPalJuego;
}

function pedirLetra(){
    return prompt("Introduce una letra");
}
function comprobarletra(letra){
   if(palJuego.includes(letra)){
    return true; 
   }else{
    return false; 
   }
}
function jugar(){
    let fallos = 0;
    let aciertos = 0;
    let letra;
    let final = false
    while (final === false){
        letra = pedirLetra();
        if(comprobarletra(letra)===true){
            arrayPalJuego[palJuego.indexOf(letra)] = letra;
            document.querySelector("#solucion").innerHTML = arrayPalJuego;
            aciertos++;
            prompt("Enhorabuena has acertado");
        }else{
            fallos+=1
            prompt("Has Fallado");

            document.querySelector("#fallos").innerHTML = "El numero de fallos es "+fallos;
        }if(fallos === 5){
            final = true;
        }
        if (aciertos === palJuego.length){
            final = true;
        }
        document.querySelector("#fallos").innerHTML = "El numero de fallos es "+fallos;
    }
}


/*
 while (fallos<5){
        letra = pedirLetra();
        if(palJuego.includes(letra)){
            arrayPalJuego[letra-1]=letra;
        }else{
            fallos+=1;
        }
    }
*/