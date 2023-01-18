function acceso(){
    peticion("http://localhost/ejercicio.txt","POST",respuesta());
}
function peticion(url,metodo,funcion){
    var peticion_http = inicializaXMLHttpRequest();
    if(peticion_http){
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo,url,true);
        peticion_http.send("");
    }
}
function inicializaXMLHttpRequest(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}
function respuesta(){
    if (peticion_http.readyState == READY_STATE_COMPLETE){
        if(peticion_http.status == 200){
            alert(peticion_http.responseText);
        }
    }
}