<!DOCTYPE html>
<html>
    <head>
        <title>Test HTML</title>
    </head>
    <body>
        <?php 
        $int =1;
        $double = 1.1;
        $bool= true;
        $string='hola buenas';

        echo '<p> Es numerico '.is_int($int).'</p>';
        echo '<p> Es double '.is_double($double).'</p>';
        echo '<p> Es booleano '.is_bool($bool).'</p>';
        echo '<p> Es String '. is_string($string).'</p>';

        
        ?>
    </body>
</html>