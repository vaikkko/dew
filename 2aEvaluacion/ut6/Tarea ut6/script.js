// Creamos el tablero:
const table = document.createElement("table");

for (var i = 0; i < 30; i++) {
  var row = document.createElement("tr");
  for (var j = 0; j < 30; j++) {
    var cell = document.createElement("td");

    row.appendChild(cell);
  }
  table.appendChild(row);
}
const contenedor = document.getElementById("zonadibujo");

contenedor.appendChild(table);

// Aquí manejamos la paleta de colores para seleccionar y borrar la elección anterior:
const paleta = document.getElementById("paleta");
const tdElements = Array.from(paleta.querySelectorAll("td"));
tdElements.pop();
console.log(tdElements);

let eleColor;

for (var i = 0; i < tdElements.length; i++) {
  tdElements[i].addEventListener("click", function (event) {
    eleColor = event.target.classList[0];
    const anterior = document.querySelector(".seleccionado");
    if (anterior) {
      anterior.classList.remove("seleccionado");
    }
    this.classList.add("seleccionado");
  });
}

// Aquí manejamos el inicio y final del coloreado:
let dibujando = false;

document.getElementById("zonadibujo").addEventListener("click", function () {
  dibujando = !dibujando;
  const pincel = document.getElementById("pincel");
  pincel.textContent = dibujando ? "Pincel Activado" : "Pincel Desactivado";
  pincel.style.backgroundColor = dibujando ? "lightgreen" : "#e7835b";
});

const celdas = table.getElementsByTagName("td");

for (var i = 0; i < celdas.length; i++) {
  celdas.item(i).addEventListener("mouseover", function (event) {
    if (dibujando) {
      event.target.classList = [];
      event.target.classList.add(eleColor);
    }
  });
}
const clear = document.getElementById("reset");

clear.addEventListener("click", (evt) => {
  location.reload();
});
