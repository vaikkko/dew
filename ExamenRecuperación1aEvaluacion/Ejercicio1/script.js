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
