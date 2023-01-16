<!DOCTYPE html>
<html>
    <head>
        <title>Test HTML</title>
    </head>
    <body>
        <?php 
       $meses = array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
       $contador = 1;
       foreach($meses as $mes){
        print('El mes nº '.$contador.' '.$mes);
        print('<br>');
        //echo $mes.' ';
        $contador++;
       }
       print_r($meses);// lo equivalente a Arrays.toString();
       print('<br>');
       for($i =0;$i<sizeof($meses);$i++){
        print('Numero del mes '.$i.' '.$meses[$i].'<br>');
       }
        ?>
    </body>
</html>