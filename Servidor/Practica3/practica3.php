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

    $dados = [];
    $numeroRandom;
    $tiradas = rand(1,10);

    for ($i = 0; $i<$tiradas;$i++){
        //generamos los dados
        $numeroRandom = rand(1,6);
        array_push($dados,$numeroRandom);     
        
    }
    echo "<h1> Tirada de ".$tiradas." dados </h1>";
    echo "<br>";
    for ($i = 0; $i<=sizeof($dados)-1;$i++){
        echo "<img style ='width = '50px' height = '50px' src='img\cara".$dados[$i].".png'>";     
        
    }
    echo "<h1> Dado a eliminar </h1>";
    $borrarDado = rand(1,6);
    echo "<img style ='width = '50px' height = '50px' src='img\cara".$borrarDado.".png'>"; 
    for ($i = 0; $i<=sizeof($dados)-1;$i++){
        if($dados[$i] == $borrarDado){
            unset($dados[$i]);
        }
    }    
    echo "<br>";
    echo "<h1> Dados restantes </h1>";

   foreach ($dados as $dadoMostrar){
    echo "<img style ='width = '50px' height = '50px' src='img\cara".$dadoMostrar.".png'>"; 
   }
    echo "<br>";
    echo "<br>";

    ?>
</body>
</html>