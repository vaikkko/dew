function mostrarTablaMultiplicar7() {
  cerrarTablas();
  let resultado = "";
  for (let i = 1; i <= 10; i++) {
    resultado += `7 x ${i} = ${7 * i} <br>`;
  }
  document.getElementById("tablaMultiplicar7").innerHTML = resultado;
}

function mostrarTablaMultiplicar8() {
  cerrarTablas();
  let resultado = "";
  let j = 1;
  while (j <= 10) {
    resultado += `8 x ${j} = ${8 * j} <br>`;
    j++;
  }
  document.getElementById("tablaMultiplicar8").innerHTML = resultado;
}

function mostrarTablaMultiplicar9() {
  cerrarTablas();
  let resultado = "";
  let k = 1;
  do {
    resultado += `9 x ${k} = ${9 * k} <br>`;
    k++;
  } while (k <= 10);
  document.getElementById("tablaMultiplicar9").innerHTML = resultado;
}

function cerrarTablas() {
  document.getElementById("tablaMultiplicar7").innerHTML = "";
  document.getElementById("tablaMultiplicar8").innerHTML = "";
  document.getElementById("tablaMultiplicar9").innerHTML = "";
}
