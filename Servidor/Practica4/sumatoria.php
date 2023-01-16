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
    
    $datosSumatoria = array();
    $dimension = $_GET["dimension"];
    for($i = 0; $i<=$dimension-1;$i++){
        array_push($datosSumatoria,$_GET[$i]);
    }

    print("El resultado de la sumatoria es: ".array_sum($datosSumatoria));
    ?>
</body>
</html>