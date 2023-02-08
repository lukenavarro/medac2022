<?php
//Importamos las librearias de Smarty al projecto 
require('libs/Smarty.class.php');

//Declaramos y inicializamos el nuevo objeto Smarty
$newSmarty = new Smarty();

//Localizamos las carpetas de Smarty 
$newSmarty->setTemplateDir('templates/');
$newSmarty->setCompileDir('templates_c/');
$newSmarty->setConfigDir('configs/');
$newSmarty->setCacheDir('cache/');

//Asignamos la variable al objeto de Smarty con el valor nombre 
$newSmarty -> assign('Nombre',$_POST['Nombre']); 

//Con esta linea ejecutamos los TPL 
$newSmarty->display('index.tpl')
?>