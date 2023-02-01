<?php
function establecerConexion($servidor,$usuario,$contrasenia,$baseDatos){
    $conexion = new mysqli($servidor,$usuario,$contrasenia,$baseDatos) or die("Error al establecer la conexion");
    return $conexion;
    
}
function obtenerDatos($conexion){
    $valores = $conexion->query("SELECT * FROM usuarios");
    echo "<table>\n";
    echo "<tr>\n";
    echo "<td> ID </td>\n";
    echo "<td> NOMBRE </td>\n";
    echo "<td> Apellidos </td>\n";
    echo "</tr>\n";
    while($row = mysqli_fetch_array($valores,MYSQL_ASSOC))
        echo "<tr>";
        echo "<td>".$row["id"]."</td><td>".$row["nombre"]."</td><td>".$row["apellidos"]."</td>";
        echo "</tr>";
    echo "</table>";
    $valores -> free();
    $conexion -> close();

    

}
$conexion = establecerConexion("localhost","root","","practica9servidor");
obtenerDatos($conexion);
?>
