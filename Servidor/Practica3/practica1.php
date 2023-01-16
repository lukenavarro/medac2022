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
        $numerorandom;
        $array1= array(0,0,0,0,0,0,0,0,0,0);
        $array2= array(0,0,0,0,0,0,0,0,0,0);
        for ($i = 0; $i<=sizeof($array1)-1;$i++){
            $numerorandom = rand(0,1);
            $array1[$i]= $numerorandom;
        }
        for($i = 0; $i<=sizeof($array1)-2;$i++){
            for ($j = $i+1;$j <=sizeof($array1)-1;$j++){
                if($array1[$i] == $array1[$j]){
                    $array2[$j-1] = 0;
                }else{
                    $array2[$j-1] = 1;
                }
            }
        }
        for ($i = 0; $i<=sizeof($array1)-1;$i++){
            echo $array1[$i];
            
        }
        echo "<br>";
        for ($i = 0; $i<=sizeof($array1)-1;$i++){
            echo $array2[$i];
            
        }

    ?>
</body>
</html>