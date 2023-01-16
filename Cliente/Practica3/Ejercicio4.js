var segundos = parseInt(prompt("Introduzca los segundos"));
var minutos = parseInt(prompt("Introduzca los minutos"));
var horas = parseInt(prompt("Introduzca la hora: "));
segundos++;
if(segundos >=60 ){
    segundos=0;
    minutos++;
    if(minutos >= 60){
        minutos=0;
        horas++;
        if(horas >= 24){
           
            horas=0;
            
        }
    }
}
document.write("La hora que nos a aportado mas un segundo es igual a:" +horas+":"+minutos+":"+segundos);