const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const nif = document.getElementById("nif");
const email = document.getElementById("email");
const provincia = document.getElementById("provincia");
const fecha = document.getElementById("fecha");
const telefono = document.getElementById("telefono");
const hora = document.getElementById("hora");

nombre.addEventListener("blur", checkName);
apellidos.addEventListener("blur", checkApellidos);
edad.addEventListener("blur", checkEdad);
nif.addEventListener("blur", checkNif);
email.addEventListener("blur", checkEmail);
provincia.addEventListener("blur", checkProvincia);
fecha.addEventListener("blur", checkFecha);
telefono.addEventListener("blur", checkTelefono);
hora.addEventListener("blur", checkHora);

function checkName(e) {
  const value = e.target.value;
  if (value.length === 0) {
    console.log("No puedes dejar vacio el campo Nombre");
  } else {
    value.toUpperCase();
  }
}

function checkApellidos(e) {
  const value = e.target.value;
  if (value.length === 0) {
    console.log("No puedes dejar vacio el campo Apellidos");
  } else {
    value.toUpperCase();
  }   
}

function checkEdad(e) {
  const value = e.target.value;
  if (value.length === 0) {
    console.log("La edad es un campo obligatorio");
  } else if (isNaN(value)) {
    console.log("La edad solo puede ser un valor numérico");
  } else if (parseInt(value) > 105) {
    console.log("Escribe una edad válida");
  }
}

function checkNif(e) {
  const value = e.target.value;
  const pat = /(^([0-9]{8,8}\-[A-Z])|^)$/;
  if (value.length === 0) {
    console.log("El número NIF es obligatorio");
  } else if (!pat.test(value)) {
    console.log("No es un número NIF válido, revisalo.");
    document.getElementById("errores").innerHTML = "No es un número NIF válido, revisalo.";
  } else {
    console.log("Número Correcto");
  }
}

function checkEmail(e) {
  const value = e.target.value;
  const pat = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
  if (value.length === 0) {
    console.log("El campo Email es obligatorio");
  } else if (!pat.test(value)) {
    console.log("Escribe un Email válido");
  } else {
    console.log("Email correcto");
  }
}

function checkProvincia(e) {}

function checkFecha(e) {
  const value = e.target.value;
  const pat =
    /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;

  if (value.length === 0) {
    console.log("El campo Fecha es obligatorio");
  } else if (!pat.test(value)) {
    console.log("Introduce una fecha válida, dd/mm/aaaa.");
  } else {
    console.log("Fecha correcta");
  }
}

function checkTelefono(e) {
  const value = e.target.value;
  const pat = /^[09][0-9]{1,7}$/;
  if (value.length === 0) {
    console.log("No puedes dejar el campo del Teléfono en blanco");
  } else if (!pat.test(value)) {
    console.log("Escribe un número válido");
  } else {
    console.log("Número correcto");
  }
}

function checkHora(e) {
  const value = e.target.value;
  const pat = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
  if (value.length === 0) {
    console.log("No puedes dejar el campo de la Hora en blanco");
  } else if (!pat.test(value)) {
    console.log("Escribe una hora válida, hh:mm.");
  } else {
    console.log("Hora correcta");
  }
}
