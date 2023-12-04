const form = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const edad = document.getElementById("edad");
const nif = document.getElementById("nif");
const email = document.getElementById("email");
const provincia = document.getElementById("provincia");

nombre.addEventListener("blur", checkName);

function checkName(e) {
  const field = e.target;
  const value = e.target.value;
  if (value.length === 0) {
    field.parentElement.insertAdjacentHTML(
      "beforeend",
      `<span class="error">El campo 'Nombre' es obligatorio!</span>`
    );
  }
}

// nombre.addEventListener("blur", notBlanc);

// apellidos.addEventListener("blur", toMayus);
// apellidos.addEventListener("blur", notBlanc);

// edad.addEventListener("blur", adulto);

// function toMayus(event) {
//   const cambiarM = event.target.value;
//   event.target.value = cambiarM.toUpperCase();
// }

// function notBlanc(event) {
//   const notBlanc = event.target.value;
//   if (notBlanc === "") {
//     alert("Este es un campo obligatorio");
//   }
// }

// function adulto(event) {
//   const edad = event.target.value;
//   if (edad > 105) {
//     alert("Introduce una edad válida");
//   } else if (edad < 10) {
//     alert("Tendrás que esperar unos años para registrarte");
//   }
// }
