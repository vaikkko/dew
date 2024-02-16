// Creamos la clase mascota con sus metodos.
class mascota {
  constructor(nombre, especie, edad, propietario, telefono) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.propietario = propietario;
    this.telefono = telefono;
    this.historial = [];
    alert(
      `Nueva mascota con nombre: ${this.nombre}; \nEspecie: ${this.especie}; \nEdad: ${this.edad}; \nPropietario: ${this.telefono}; `
    );
  }

  agregarEpisodio() {
    if (confirm("Quieres agregar un historial¿")) {
      let episodio = prompt("Añade un episodio al historial");
      this.historial.push({ Episodio: episodio });
    }
  }

  imprimirHistorial() {
    if (confirm("Deseas imprimir el historial?")) {
      for (let i = 0; i < this.historial.length; i++) {
        console.log(this.historial[i].Episodio);
      }
    }
  }
}

// Manejo del formulario

let mascotaNueva = null;

const crearnuevo = document.getElementById("crearnuevo");
crearnuevo.addEventListener("click", crearNuevaMascota);

function crearNuevaMascota(e,historial) {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let especie = document.getElementById("especie").value;
  let edad = document.getElementById("edad").value;
  let propietario = document.getElementById("propietario").value;
  let telefono = document.getElementById("telefono").value;
  mascotaNueva = new mascota(nombre, especie, edad, propietario, telefono);
  document.getElementById(
    "datosmascota"
  ).value = `Nombre: ${nombre}\nEspecie: ${especie} \nEdad: ${edad}\nPropietario: ${propietario}\nTelefono: ${telefono}`;
  document.getElementById("historial").value = `No consigo imprimir el historial y el botón de limpiar recarga la página pero no limpia el formulario`;

  return false;
}

const añadeEpisodio = document.getElementById("agregarEps");
crearnuevo.addEventListener("click", añadeEpi);

function añadeEpi(e) {
  e.preventDefault();
  if (mascotaNueva) {
    mascotaNueva.agregarEpisodio();
  }
}

const limp = document.getElementById("limpiar");
limp.addEventListener("click", limpiar);

function limpiar() {
  window.location.reload();
}
