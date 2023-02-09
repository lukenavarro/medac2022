//Variables necesarias para la conexion con Express y MySql
var express = require('express');
var server = express();
var mysql = require("mysql");
// Creamos la conexion con mysql
var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database:"libreria"
});
//Establecemos la cadena de salida
var cadena = "Los resultados mayores del 2020 son : ";
//Realizamos la conexion con el servidor y hacemos la query para solicitar los datos de la base de datos
server.get("/",function(peticion,respuesta){
        conexion.query("SELECT * FROM libros WHERE `AnioDisponible` >=2020;",function(error,result,fields){
            for(let i = 0; i<result.length;i++){
                //Procesamos cada salida de datos
                cadena += "<br>"+"Nombre del libro :"+result[i].Nombre+" Año de lanzamiento: "+result[i].AnioDisponible+" Libros disponibles: "+result[i].NumDisponibles;
            }
            //Mostramos la salida por pantalla.
            respuesta.send(cadena);
        });
});
server.listen(3000,function(){
    console.log("Establecida la conexion con el puerto 3000");
});