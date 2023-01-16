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
        $array = array();
        $randomArray = rand(2,7);
        for($i = 0; $i<$randomArray;$i++){
            $random = rand(2,6);
            echo "la tirada del dado es : ".$random."<br>";
            array_push($array,$random);
        }

        echo "las tiradas de los dados han sido : <br>";

        for($i = 0; $i<$randomArray;$i++){
            echo $array[$i]."<br>";
        }
    ?>
</body>
</html>