// Gestion de la hora
var horaCompleta = new Date();
var horas = horaCompleta.getHours();
var sec = horaCompleta.getSeconds();
var min = horaCompleta.getMinutes();

// Declaracion del servidor Express
var express = require('express');
var server = express();
server.get('/' ,function(petecion, respuesta){
    //Salida de la hora
    respuesta.send(`<body>Conexion HTML con el servidor express <br> Hora de la conexion ${horas}:`+min+`:${sec}</body>`);
})

//Conexion con el servidor
var serverOn = server.listen(3000,function(){
    console.log("Escucha del servidor en el puerto 3000");
})