var array =[];
var numerosaAñadir= parseInt(prompt("Cuantos numeros deseas añadir"));
var booleano = false;
var contador = 0;
for(var i =0;i<numerosaAñadir;i++){
    array[i]=parseInt(prompt("introduzca el numero en la posicion "+i+":"));
}
for(var i =1;i<array.length-1;i++){
    for(var j = 0; j <array.length-2;j++){
        if(array[j]>=array[i]){
            contador++;
            console.log(contador);
            console.log("Numero i "+array[i]+" Numero J "+array[j]);
        }
    }
    
}
array.forEach(element => {
    document.write(element+"\n");
});
if(array.length>=2 && contador ==1 || contador >= 2){   
    document.write(booleano);
}else if (contador <= 1){
    booleano=true;
    document.write(booleano);
}

