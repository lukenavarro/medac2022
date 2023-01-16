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

    $numeroJugador1 = array("","","","","");
    $numeroJugador2 = array("","","","","");
    $numeroRandom;
    $ganar1 = 0;
    $ganar2 = 0;
    $empatan = 0;

    for ($i = 0; $i<5;$i++){
        //generamos el numero para el jugador 1
        $numeroRandom = rand(1,6);
        $numeroJugador1[$i] = $numeroRandom;
        //Generamos el numero random para el jugador 2
        $numeroRandom = rand(1,6);
        $numeroJugador2[$i] = $numeroRandom;        
        
    }
    for ($i = 0; $i<sizeof($numeroJugador1)-1;$i++){
        if($numeroJugador1[$i]>$numeroJugador2[$i]){
            $ganar1++;
        }else if($numeroJugador1[$i]<$numeroJugador2[$i]){
            $ganar2++;
        } else if($numeroJugador1[$i]==$numeroJugador2[$i]){
            $empatan++;
        }
    }
    for ($i = 0; $i<=sizeof($numeroJugador1)-1;$i++){
        echo "<img style ='width 200px, height =200px' src='img\cara".$numeroJugador1[$i].".png'>";     
        
    }
    echo "<br>";
    for ($i = 0; $i<=sizeof($numeroJugador2)-1;$i++){
        echo "<img style =' width 200px, height =200px' src='img\cara".$numeroJugador2[$i].".png'>";     
    }
    echo "<br>";
    echo "<br>";
    echo "El jugador uno ha ganado : ".$ganar1." El jugador dos ha ganado: ".$ganar2." y han empatado ".$empatan;
    echo "<br>";
    if ($ganar1>$ganar2){
        print "<h1>Ha ganado el jugador1</h1>";
    }else if ($ganar1<$ganar2){
        print "<h1>Ha ganado el jugador2</h1>";

    }else{
        print "<h1>Han empatado ambos jugadores</h1>";
    }
    ?>
</body>
</html>