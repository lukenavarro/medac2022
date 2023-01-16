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
        $nombre = array("F","R","A","N");
        $apellido = array("N","A","V","A","R","R","O");
        $nombrecompleto=array_merge($nombre,$apellido);
        foreach($nombrecompleto as $letra){
            print $letra;
        }
        $test1 = array("C","O","C","H","E");
        $test2 = array_slice($test1,2,3);
        foreach($test2 as $letra){
            print $letra;
        }
    ?>
</body>
</html>