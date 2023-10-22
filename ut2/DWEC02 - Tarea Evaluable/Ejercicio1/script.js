function mostrarTablaMultiplicar7() {
  cerrarTablas();
  let resultado = "";
  let j = 1;
  do {
    resultado += `7 x ${j} = ${7 * j} <br>`;
    j++;
  } while (j <= 10);
  document.getElementById("tablaMultiplicar7").innerHTML = resultado;
}

function mostrarTablaMultiplicar8() {
  cerrarTablas();
  let resultado = "";
  for (let j = 1; j <= 10; j++) {
    resultado += `8 x ${j} = ${8 * j} <br>`;
  }
  document.getElementById("tablaMultiplicar8").innerHTML = resultado;
}

function mostrarTablaMultiplicar9() {
  cerrarTablas();
  let resultado = "";
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let j of numbers) {
    resultado += `9 x ${j} = ${9 * j} <br>`;
  }
  document.getElementById("tablaMultiplicar9").innerHTML = resultado;
}

function cerrarTablas() {
  document.getElementById("tablaMultiplicar7").innerHTML = "";
  document.getElementById("tablaMultiplicar8").innerHTML = "";
  document.getElementById("tablaMultiplicar9").innerHTML = "";
}
