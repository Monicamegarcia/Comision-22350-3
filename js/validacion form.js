
var form = document.getElementById("Formulario")
form.addEventListener("submit",function(evt){
    evt.preventDefault();

    var mensajesError = [];

    if (tel.value === null || tel.value === "") {
        mensajesError.push("ingresa tu telefono");
    }
    if (m2.value === null || m2.value === "") {
        mensajesError.push("ingresa tus m2");
    }

    error.innerHTML = mensajesError.join(" ,");

});