<?php
   //Declaracion de la uri y la url ya que no tenemos WDSL vamos a necesitar la URI
   $uri = "http://localhost/";
   $url = "http://localhost/ParteServidorPractica11.php";
   //Declaracion y asignacion de las dos variables para el ejercicio
   $num1 = 4;
   $num2 = 2;
   //Declaracion y asignacion del cliente SOAP
   $clienteSOAP = new SoapClient(null, array('location' => $url, 'uri' => $uri));
   //Llamada a las funciones de la parte servidor y creacion de las variables para guardar el resultado
   $resultadoSuma = $clienteSOAP->sumar($num1, $num2);
   print("El resultado de la suma de $num1 y $num2 es: " . $resultadoSuma);
   $resultadoResta = $clienteSOAP->restar($num1, $num2);
   print("<br>El resultado de la resta de $num1 y $num2 es: " . $resultadoResta);
   $resultadoMultiplicacion = $clienteSOAP->multiplicar($num1, $num2);
   print("<br>El resultado de la multiplicacion de $num1 y $num2 es: " . $resultadoMultiplicacion);
   $resultadoDivision = $clienteSOAP->dividir($num1, $num2);
   print("<br>El resultado de la division de $num1 y $num2 es: " . $resultadoDivision);
   $resultadoPotencia = $clienteSOAP->potencia($num1, $num2);
   print("<br>El resultado de la potecia de $num1 elevado a $num2 es: " . $resultadoPotencia);
   $resultadoRaiz = $clienteSOAP->raizCuadrada($num1, $num2);
   print("<br>El resultado de la raiz cuadrada de $num1 es: " . $resultadoRaiz);
?>