<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario de conexion Smarty</title>
</head>
<body>
<form method="POST">
   <p>Nombre:</p> 
    <input type="text" name="Nombre" />
    <br>
    <p>Password:</p>
    <input type="password" name="password" />
    <br>
    <input type="submit" name="Enviar" />
    <input type="reset" name="Resetear" />
</form>
    <!--BIENVENIDA CON EL NOMBRE INTRODUCIDO-->
    {if $Nombre}
        Bienvenido {$Nombre} esto es una prueba de conexion con smarty
    {else}
        <!--ERROR EN EL NOMBRE-->
        Introduce un usuario correcto
    {/if}
</body>
</html>