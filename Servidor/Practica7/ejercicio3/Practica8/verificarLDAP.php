<?php
    $hostname = "ldap.forumsys.com";
    $port = 389;
    $user  = $_POST["usuario"];
    $pass = $_POST["contraseña"];
    $idConexion = ldap_connect($hostname, $port) or die("No se ha podido estable la conexión con el servidor LDAP".$hostname);
    if ($idConexion) {
    $enlaceCorrecto = ldap_bind($idConexion,$user, $pass);
        if($enlaceCorrecto) 
    {
        echo "Autenticación correcta";
    }else{
        echo "Autenticación incorrecta";   
    }
    }
?>