function checkForm(event){
    let form = document.getElementById("formulario");
    let cookieNombre = `nombre=${form["nombre"].value}`;
    cookieNombre+=";max-age=3600000";
    document.cookie=cookieNombre;
    let cookieApellidos = `apellidos=${form["apellidos"].value}`;
    cookieApellidos+=";max-age=3600000";
    document.cookie=cookieApellidos;
    let cookieTelefono = `telefono=${form["telefono"].value}`;
    cookieTelefono+=";max-age=3600000";
    document.cookie=cookieTelefono;
    let coockieEmail = `email=${form["email"].value}`;
    coockieEmail+=";max-age=3600000";
    document.cookie=coockieEmail;
    let cookiePassword = `contraseña=${form["contraseña"].value}`;
    cookiePassword+=";max-age=3600000";
    document.cookie=cookiePassword;
    let cookieRepetirPassword = `repetirContraseña=${form["repetirContraseña"].value}`;
    cookieRepetirPassword+=";max-age=3600000";
    document.cookie=cookieRepetirPassword;
}

function cargarCookies(){
    let form = document.getElementById("formulario");
    form.addEventListener("submit",checkForm);
    let all = document.cookie;
    if (!all){
        return;
    }
    let cookies = all.split(";");
    cookies.forEach(element => {
        let indexOf = element.indexOf("=")
        let key = element.substring(0,indexOf);
        let value = decodeURIComponent(element.substring(indexOf+1));
        form[key.trim()].value=value;
    });
}
window.onload=cargarCookies();