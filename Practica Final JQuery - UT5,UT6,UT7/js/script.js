// Selecciono por Id todos los campos necesarios:
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const nif = document.getElementById("nif");
const email = document.getElementById("email");
const provincia = document.getElementById("provincia");
const fecha = document.getElementById("fecha");
const telefono = document.getElementById("telefono");
const hora = document.getElementById("hora");

const formulario = document.getElementById("formulario");

// Añado el evento, y la función:
nombre.addEventListener("blur", checkName);
apellidos.addEventListener("blur", checkApellidos);
edad.addEventListener("blur", checkEdad);
nif.addEventListener("blur", checkNif);
email.addEventListener("blur", checkEmail);
provincia.addEventListener("blur", checkProvincia);
fecha.addEventListener("blur", checkFecha);
telefono.addEventListener("blur", checkTelefono);
hora.addEventListener("blur", checkHora);

// Validamos el nombre:
function checkName() {
  const value = nombre.value;
  if (value.length === 0) {
    document.getElementById("errores").innerHTML =
      "No puedes dejar el Nombre en blanco.";
    return false;
  } else {
    nombre.value = value.toUpperCase();
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}
// Validamos los apellidos:
function checkApellidos() {
  const value = apellidos.value;
  if (value.length === 0) {
    document.getElementById("errores").innerHTML =
      "No puedes dejar los Apellidos en blanco.";
    return false;
  } else {
    apellidos.value = value.toUpperCase();
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}
// Validamos la edad:
function checkEdad() {
  const value = edad.value;
  if (value.length === 0) {
    document.getElementById("errores").innerHTML =
      "La edad es un campo obligatorio";
    return false;
  } else if (isNaN(value)) {
    document.getElementById("errores").innerHTML =
      "La edad solo puede ser un valor numérico";
    return false;
  } else if (parseInt(value) > 105 || parseInt(value) < 0) {
    document.getElementById("errores").innerHTML = "Escribe una edad válida";
    return false;
  } else {
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}
// Validamos el NIF:
function checkNif(e) {
  const value = nif.value;
  const pat = /(^([0-9]{8,8}\-[A-Z])|^)$/;
  if (value.length === 0) {
    console.log("El número NIF es obligatorio");
    document.getElementById("errores").innerHTML =
      "El campo NIF es obligatorio";

    return false;
  } else if (!pat.test(value)) {
    document.getElementById("errores").innerHTML =
      "No es un número NIF válido, XXXXXXXX-L.";
    return false;
  } else {
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}
//Validamos el Email:
function checkEmail() {
  const value = email.value;
  const pat = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
  if (value.length === 0) {
    document.getElementById("errores").innerHTML =
      "El campo Email es obligatorio";
    return false;
  } else if (!pat.test(value)) {
    document.getElementById("errores").innerHTML = "Escribe un Emaill válido";
    return false;
  } else {
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}
// Validamos la Provincia:
function checkProvincia() {
  const value = provincia.value[0];
  if (value === "0") {
    document.getElementById("errores").innerHTML =
      "Seleccionar una Provincia es obligatorio.";
    return false;
  } else {
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}
// Validamos la fecha:
function checkFecha() {
  const value = fecha.value;
  const pat =
    /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

  if (value.length === 0) {
    document.getElementById("errores").innerHTML =
      "El campo Fecha es obligatorio";
    return false;
  } else if (!pat.test(value)) {
    document.getElementById("errores").innerHTML =
      "Introdce una fecha válida, dd/mm/aaaa.";
    return false;
  } else {
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}
// Validamos el Telefono
function checkTelefono(e) {
  const value = telefono.value;
  const pat = /^([6789][0-9]{8,13})$/;
  if (value.length === 0) {
    document.getElementById("errores").innerHTML =
      "No puedes dejar el campo Teléfono en blanco";
    return false;
  } else if (!pat.test(value)) {
    document.getElementById("errores").innerHTML = "Escribe un teléfono válido";
    return false;
  } else {
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}

// Validamos la hora:
function checkHora(e) {
  const value = hora.value;
  const pat = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (value.length === 0) {
    document.getElementById("errores").innerHTML =
      "No puedes dejar el campo de la Hora en blanco";
    return false;
  } else if (!pat.test(value)) {
    document.getElementById("errores").innerHTML =
      "Escribe una hora válida, hh:mm.";
    return false;
  } else {
    document.getElementById("errores").innerHTML = "";
    return true;
  }
}

// Enviamos el formulario, y pedimos confirmación de la acción:
// No consigo que me funcione y no encuentro el problema...
formulario.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    checkName() &&
    checkApellidos() &&
    checkEdad() &&
    checkNif() &&
    checkEmail() &&
    checkProvincia() &&
    checkFecha() &&
    checkTelefono() &&
    checkHora()
  ) {
    var eleccion = confirm("¿Estas seguro de que quieres enviar los datos?");
    if (eleccion === true) {
      alert("Has enviado los datos correctamente");
    } else {
      alert("Has cancelado el envio");
    }
  } else {
  }
});
