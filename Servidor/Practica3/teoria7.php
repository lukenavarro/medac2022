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
        $random; 
        $array = array(0,0,0);
        for($i = 0; $i<3;$i++){
            $random = rand(2,6);
            echo "la primera tirada del dado es : ".$random."<br>";
            $array[$i] = $random;
        }

        echo "las tiradas de los dados han sido : <br>";

        for($i = 0; $i<3;$i++){
            echo $array[$i]."<br>";
        }
    ?>
</body>
</html>