<?php
setcookie('contador', $_COOKIE['contador'] + 1, time() + 365 * 24 * 60 * 60); 
echo "Has entrado ".$_COOKIE['contador']." veces";
?>