function Sumatoria(){
    let value  = parseInt(document.getElementById("numSumatoria").value);
    let sol = "El resultado de la sumatoria de "+value+" es : ";
    let resultSum = 0;
    for(let i = 0; i<=value;i++){
        resultSum += i;
        if (i === value){
            sol += i+ "=" + resultSum;
        }else{
            sol += i + "+";
        }
       
    }
    document.getElementById("parrafoSolucion").innerHTML=sol;
}
