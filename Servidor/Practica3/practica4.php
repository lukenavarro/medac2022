<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #blanco{
            background-color: white;
            width: 50px;
            height: 50px;
            color: black;
            text-align: center;
            border: 2px solid black;
        }
        #negro{
            background-color: black;
            width: 50px;
            height: 50px;
            color: white;
            text-align: center;
            border: 2px solid black;
        }



    </style>
</head>
<body>
    <?php
    function mostrarMatriz ($matriz){

        for($i = 0; $i <= sizeof($matriz)-1;$i++){
            for($j = 0;$j <=sizeof($matriz[$i])-1;$j++){
                echo $matriz[$i][$j];
            }
            echo "<br>";
        }
    }

    function insertarFichas($matriz,$fichas,$color){
        $esBlanco =0;
        echo sizeof($matriz);
        for($i = 0; $i<=sizeof($matriz)-1; $i++){
            if($color == 'negro' && $esBlanco == 0 ){
                $matriz[0][$i] = `<div id = "blanco">`.$fichas[$i]."_N".`</div>`;
                $matriz[1][$i] = `<div id = "negro">P_N</div>`;
                $esBlanco=1;
                echo "entra en el for1";
            }else if ($color == 'blanco' && $esBlanco == 0){
                $matriz[6][$i] = "<div id = 'blanco'>P_B</div>";
                $matriz[7][$i] = "<div id = \"negro\">".$fichas[$i]."_B"."</div>";
                $esBlanco=1;
                echo "entra en el for2";
                echo $i;
            }else if ($color == 'negro' && $esBlanco == 1){
                $matriz[0][$i] = `<div id = "negro">`.$fichas[$i]."_N".`</div>`;
                $matriz[1][$i] = `<div id = "blanco">P_N</div>`;
                $esBlanco=0;
                echo "entra en el for3";

            }else if ($color == 'blanco' && $esBlanco == 1){
                $matriz[6][$i] = `<div id = "negro">P_B</div>`;
                $matriz[7][$i] = `<div id = "blanco">`.$fichas[$i]."_B".`</div>`;
                $esBlanco=0;
                echo "entra en el for4";

            }
        }
    }
    function rellenarTablero ($matriz){
        $cont = 1;
        for($i = 0; $i <= sizeof($matriz)-1;$i++){
            for($j = 0;$j <=sizeof($matriz[$i])-1;$j++){
                echo $i;
                echo $j;
                if($cont == 1){
                $matriz[$i][$j] = "<div id = 'blanco'></div>";
                $cont = 0;
                }else{
                $matriz[$i][$j] = "<div id = 'negro'></div>";
                $cont = 1;
                }
            
            }
            echo "<br>";
       }
    }
    
    $tablero = array(array("","","","","","","",""),array("","","","","","","",""),array("","","","","","","",""),array("","","","","","","",""),array("","","","","","","",""),array("","","","","","","",""),array("","","","","","","",""),array("","","","","","","",""));
    $fichas = array("T","C","A","RA","RY","A","C","T");
    rellenarTablero($tablero);
    mostrarMatriz($tablero);
    ?>
</body>
</html>