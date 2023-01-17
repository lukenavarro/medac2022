function validar(){
    $("#formulario").submit(function(){
        let error = true;
        if($("#nombre").val().length < 6){
            $("#errorNombre").html("Error el nombre es menor de 6 caracteres");
            $("#errorNombre").show();
            error = false;
        }else{
            $("#errorNombre").hide();
        }if($("#apellidos").val().length < 6){
            $("#errorApellidos").html("Error los apellidos son menores de 6 caracteres");
            $("#errorApellidos").show();
            error = false;
        }else{
            $("#errorApellidos").hide();
        }if($("#email").val().length < 8){
            $("#errorEmail").html("Error el email es menor de 8 caracteres");
            $("#errorEmail").show();
            error = false;
        }else{
            $("#errorEmail").hide();
        }if($("#contrasenia").val() != ($("#repetirContrasenia").val())){
            $("#errorContrasenia").html("Las contraseñas no coinciden");
            $("#errorContrasenia").show();
            error = false;
        }else{
            $("#errorContrasenia").hide();
        }if($("#contrasenia").val().length < 6 && $("#contrasenia").val().length > 12){
            $("#errorContrasenia").html("Las contraseña es menor de 6 caracteres o mayor que 12 caracteres");
            $("#errorContrasenia").show();
            error = false;
        }else{
            $("#errorContrasenia").hide();
        }
        return error;
    });
}