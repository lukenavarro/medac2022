<!DOCTYPE html>
<html>
    <head>
        <title>Test HTML</title>
    </head>
    <body>
        <?php 
       $meses = array("posicion1"=> 'Enero',"posicion"=> 'Febrero',"posicion3"=> 'Marzo',"posicion4"=> 'Abril',"posicion5"=> 'Mayo',"posicion6"=> 'Junio',"posicion7"=> 'Julio',"posicion8"=> 'Agosto',"posicion9"=> 'Septiembre',"posicion10"=> 'Octubre',"posicion11"=> 'Noviembre',"posicion12"=> 'Diciembre');
       $contador = 1;
       foreach($meses as $key => $mes){
        print('El mes nº '.$contador.' '.$meses[$key]);
        print('<br>');
        //echo $mes.' ';
        $contador++;
       }
       print_r($meses);// lo equivalente a Arrays.toString();
       print('<br>');
       for($i=0;$i<sizeof($meses);$i++){
        print($meses[$i]);
        print('<br>');
       }
        ?>
    </body>
</html>