<?php
function establecerConexion($servidor,$usuario,$contrasenia,$baseDatos){
    $conexion = new mysqli($servidor,$usuario,$contrasenia,$baseDatos) or die("Error al establecer la conexion");
    return $conexion;
    
}
function obtenerDatos($conexion){
    $valores = $conexion->query("SELECT * FROM usuarios");
    echo "<table>";
    echo "<tr>";
    echo "<td> ID </td>";
    echo "<td> NOMBRE </td>";
    echo "<td> Apellidos </td>";
    echo "</tr>";
    while($row = mysqli_fetch_object($valores))
        echo "<tr>";
        foreach ($row as $rowValue){
            echo "<td>$rowValue</td>";
        }
        echo "</tr>";
    echo "</table>";
    $valores -> free();
    $conexion -> next_result();
    $conexion -> close();

    

}
$conexion = establecerConexion("localhost","root","","practica9servidor");
obtenerDatos($conexion);
?>