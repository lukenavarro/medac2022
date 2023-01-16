<!DOCTYPE html>
<html>
    <head>
        <title>Test HTML</title>
        <style>
            #rojo{
                background-color: red;
                width: 20px;
                height: 10px;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <?php 
                    $numero = 5;
                    $contador = 0;
                    while($contador<$numero){
                        if($contador % 2 == 0){
                            echo "<td id = \"rojo\"></td>";
                        }
                        $contador++;
                    }    
                ?>
            </tr>
        </table>
       
    </body>
</html>