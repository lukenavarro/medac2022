<?php
//Establecer conexion con la bae de datos y seleccionar la base de datos, utilizaremos la libreria mysqli ya que es la mas actualizada
$conexion = mysqli_connect("localhost", "root", "") or die("No hemos podido establecer conexion con la base de datos");
echo "Conexion Establecida con la base de datos";
mysqli_select_db($conexion, "practica9servidor");
//Realizamos la peticion de datos a la base de datos
$query = mysqli_query($conexion,"SELECT * FROM usuarios ") or die ("No se ha podido recoger la query establecida");
//Procesamiento de los datos
echo "<table>";
echo "<tr>\n<td>ID</td>\n<td>Nombre</td>\n<td>Apellido</td>\n</tr>";
while ($linea = mysqli_fetch_array($query)){
    echo "\t <tr> \n";
    echo "<td>".$linea["ID"]."</td>";
    echo "<td>".$linea["Nombre"]."</td>";
    echo "<td>".$linea["Apellidos"]."</td>";
    echo "\t </tr> \n";

}
echo "</table>";
//Liberamos los datos y desconectamos de la base de Datos
mysqli_free_result($query);
mysqli_close($conexion);
echo "Desconexion con exito de la base de Datos";

?>