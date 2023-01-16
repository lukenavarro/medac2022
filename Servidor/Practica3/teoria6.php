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
        $arrayimagen=array(imagepng($im1,"C:\Users\\franj\Desktop\imagenes\barcelona.png"));
        for($i = 0;$i<sizeof($arrayimagen);$i++){
            echo $arrayimagen[$i];   
            echo "<br>";
        }
    ?>
</body>
</html>