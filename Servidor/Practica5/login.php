<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesion</title>
</head>
<body>
    <?php
    //Author: Francisco Navarro De Juan
    // Descripcion: Login ejercicio 2 Pratica 4.
    $nombreUsuario = "Francisco2";
    $contraseña = "PoliticaMedac2";
    $usuarioIntroducido  = $_POST["usuario"];
    $contraseñaIntroducida = $_POST["contraseña"];
    //Comprobamos si el usuario y la contraseña es correcta y en el caso de que lo sea iniciara sesion si no ira de vuelta a el LOGIN
    if($nombreUsuario == $usuarioIntroducido && $contraseña == $contraseñaIntroducida){
        session_start();
        print ("<p>Sesion iniciada</p>");
    }else{
        header("Location:Ejercicio1.html");
    }
    ?>
</body>
</html>