function comprobarContrasenia(){
    let contrasenia = document.getElementById("contraseña").value;
    let repetirContrasenia = document.getElementById("repetirContraseña").value;
    if (contrasenia === repetirContrasenia && contrasenia.length <=6 && contrasenia.length >=12){
        return true;
    }else{
        alert("Contraseñas Incorrectas o no contienen los caracteres necesarios");
        return false;
    }
}
function comprobarLongitud(type){
    let param;
    switch(type){
        case "nombre":
            param = document.getElementById(type).value;
            if(param.length <= 20){
                alert ("El "+type+" es mayor de 20 caracteres");
                return false;
            }
            break;
        case "apellidos":
            param = document.getElementById(type).value;
            if(param.length <= 20){
                alert ("El "+type+" es mayor de 20 caracteres");
                return false;
            }
            break;
    }

}

function checkForm(){
    comprobarContrasenia();
    comprobarLongitud();
}