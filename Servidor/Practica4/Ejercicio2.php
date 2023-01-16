<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //Asignamos una variable para ver cuantos imput vamos a generar.

    $numeros = $_GET["num1"];
    print('<h1>Introduzca los numeros para la sumatoria</h1>');
    print("<br>");
    print('<form action = "sumatoria.php" method = "get">');
    for ($i = 0;$i<=$numeros-1;$i++){
        print('<input type = "number"  name ="'.$i.'" placeholder="'.($i+1).'º">');
    }
    print('<input type = "hidden" value = '."$numeros".'name ="dimension">');
    print('<input type = "submit">');
    print('</form>');

    
    ?>
</body>
</html>