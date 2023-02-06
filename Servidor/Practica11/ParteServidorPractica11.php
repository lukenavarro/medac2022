<?php
    //Declaración de la uri y exportacion de las funciones al servidor
    $uri = "http://localhost/";
    $server = new SoapServer(null,array('uri'=> $uri));
    $server -> addFunction("sumar");
    $server -> addFunction("restar");
    $server -> addFunction("multiplicar");
    $server -> addFunction("dividir");
    $server -> addFunction("potencia");
    $server -> addFunction("raizCuadrada");
    $server -> handle();
    //Creacion de las funciones para la parte servidor
    function sumar($num1, $num2){
        return $num1+$num2;
    }
    function restar($num1,$num2){
        return $num1-$num2;
    }
    function multiplicar($num1,$num2){
        return $num1*$num2;
    }
    function dividir($num1,$num2){
        return $num1/$num2;
    }
    function potencia($num1,$num2){
        return pow($num1,$num2);
    }
    function raizCuadrada($num1){
        return sqrt($num1);
    }
?>