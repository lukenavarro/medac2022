<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 1 Tema 4</title>
</head>
<body>
    <?php
        function suma(){
        $numero1 =$_GET["num1"];
        $numero2 = $_GET["num2"];
        $suma = $numero1+$numero2;
        print("El resultado de la suma es ".$suma);
        echo "<br>";
        }
        function resta(){
            $resta = $_GET["num1"]-$_GET["num2"];
            print("El resultado de la suma es ".$resta);
            echo "<br>";
            }
        function multiplicacion(){
            $multiplicacion = $_GET["num1"]*$_GET["num2"];
            print("El resultado de la suma es ".$multiplicacion);
            echo "<br>";
        }
        function divison(){
             $division = $_GET["num1"]/$_GET["num2"];
             print("El resultado de la suma es ".$division);
             echo "<br>";
        }

        
        suma();
        resta();
        multiplicacion();
        divison();
        ?>
</body>
</html>

