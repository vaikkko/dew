// Guardamos las referencias a los elementos que necesitamos:
const mainCanvas = document.getElementById("main-canvas");
const context = mainCanvas.getContext("2d");

const clear = document.getElementById("reset");
const setPincelInput = document.getElementById("setPincel");
const setColor = document.getElementById("setColor");

let initialX;
let initialY;
let lineWidth = 5;

// Cambiamos el grosor del pincel dependiendo de la selección del usuario (3 opciones).
const t1 = document
  .getElementById("t1")
  .addEventListener("change", function () {
    lineWidth = 5;
  });

const t2 = document
  .getElementById("t2")
  .addEventListener("change", function () {
    lineWidth = 15;
  });
const t3 = document
  .getElementById("t3")
  .addEventListener("change", function () {
    lineWidth = 35;
  });


// Establezco un background-color para el estado del pincel al cargar la página (desactivado)
setPincelInput.style.backgroundColor = "rgb(242, 130, 149)";

// Cambiamos el valor del input a 'Activado' y el background-color respectivo
const activarPincel = () => {
  setPincelInput.value = "Activado";
  setPincelInput.style.backgroundColor = "rgb(173, 230, 191)";
};

// Cambiamos el valor del input a 'Desactivado' y su background-color respectivo
const desactivarPincel = () => {
  setPincelInput.value = "Desactivado";
  setPincelInput.style.backgroundColor = "rgb(242, 130, 149)";
};

const dibujar = (cursorX, cursorY) => {
  context.beginPath();
  context.moveTo(initialX, initialY);
  context.lineWidth = lineWidth;
  context.strokeStyle = setColor.value;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineTo(cursorX, cursorY);
  context.stroke();

  initialX = cursorX;
  initialY = cursorY;
};

const mouseDown = (evt) => {
  initialX = evt.offsetX;
  initialY = evt.offsetY;

  dibujar(initialX, initialY);
  activarPincel(); // Generamos el estado del pincel al presionar el boton del ratón.
  mainCanvas.addEventListener("mousemove", mouseMoving);
};

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
  mainCanvas.removeEventListener("mousemove", mouseMoving);
  desactivarPincel(); // Generamos el otro estado del pincel al soltarlo
};

// Reseteamos la página:
clear.addEventListener("click", (evt) => {
  location.reload();
});


mainCanvas.addEventListener("mousedown", mouseDown);
mainCanvas.addEventListener("mouseup", mouseUp);
