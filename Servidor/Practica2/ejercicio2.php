<!DOCTYPE html>
<html>
    <head>
        <title>Test HTML</title>
    </head>
    <body>
        <?php 
        $num1 = 10;
        $num2 = 5;

        echo '<p>El resultado de la suma de '.$num1.' + '.$num2.' = '.($num1 + $num2).'</p>';
        echo '<p>El resultado de la resta de '.$num1.' - '.$num2.' = '.($num1 - $num2).'</p>';
        echo '<p>El resultado de la multiplicación de '.$num1.' * '.$num2.' = '.($num1 * $num2).'</p>';
        echo '<p>El resultado de la division de '.$num1.' / '.$num2.' = '.($num1 / $num2).'</p>';

        
        ?>
    </body>
</html>