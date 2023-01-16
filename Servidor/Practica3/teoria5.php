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
        $matriz1 = array(array(1,2,3),array(4,5,6),array(7,8,9));
        $matriz2= array(array(2,2,2),array(2,2,2),array(2,2,2));
        $matriz3=array(array(0,0,0),array(0,0,0),array(0,0,0));
        $resultado=0;
        for($i=0; $i<sizeof($matriz1);$i++){
            for($j=0; $j<sizeof($matriz1);$j++){
                $resultado= $matriz1[$i][$j]*$matriz2[$j][$i];
                $matriz3[$i][$j]=$resultado;
            }
            
        }
        for($i = 0;$i<sizeof($matriz3);$i++){
            for($j = 0 ;$j<sizeof($matriz3);$j++){
                echo $matriz3[$i][$j]." ";
            }
            echo "<br>";
        }
    ?>
</body>
</html>