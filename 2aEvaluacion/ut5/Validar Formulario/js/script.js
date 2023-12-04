const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const nif = document.getElementById("nif");
const email = document.getElementById("email");
const provincia = document.getElementById("provincia");

nombre.addEventListener("blur", checkName);
apellidos.addEventListener("blur", checkApellidos);
edad.addEventListener("blur", checkEdad);
nif.addEventListener("blur", checkNif);
email.addEventListener("blur", checkEmail);

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
  }else{
    console.log("Email correcto");
  }
}
