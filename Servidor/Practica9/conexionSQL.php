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
    while($row = $valores ->fetch_assoc($valores))
        echo "<tr>";
        echo "<td>".$row["id"]."</td><td>".$row["nombre"]."</td><td>".$row["apellidos"]."</td>";
        echo "</tr>";
    echo "</table>";
    $valores -> free();
    $conexion -> next_result();
    $conexion -> close();

    

}
$conexion = establecerConexion("localhost","root","","practica9servidor");
obtenerDatos($conexion);
?>