function mostrarTablaMultiplicar7() {
  cerrarTablas(); // llamando a esta funcion nos aseguramos de que las otras tablas esten cerradas
  let resultado = "";
  let j = 1;
  do {
    // utilizamos un doWhile para calcular y añadir a resultado.
    resultado += `7 x ${j} = ${7 * j} <br>`;
    j++;
  } while (j <= 10);
  document.getElementById("tablaMultiplicar7").innerHTML = resultado;
  // Aquí insertamos el contenido de resultado en el id 'tablaMultiplicar7'
}

function mostrarTablaMultiplicar8() {
  cerrarTablas(); // llamamos a la función para cerrar las otras tablas de multiplicar
  let resultado = "";
  // utilizamos un for para calcular la tabla, y añadirlo
  for (let j = 1; j <= 10; j++) {
    resultado += `8 x ${j} = ${8 * j} <br>`;
  }
  document.getElementById("tablaMultiplicar8").innerHTML = resultado;
  // Insertamos el contenido de resultado en 'tablaMultiplicar8'
}

function mostrarTablaMultiplicar9() {
  cerrarTablas(); // No aseguramos de cerrar las otras tablas
  let resultado = "";
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array que utilizaremos para las calculos
  for (let j of numbers) {
    // bucle for of del array anterior para multiplicarr
    resultado += `9 x ${j} = ${9 * j} <br>`;
  }
  document.getElementById("tablaMultiplicar9").innerHTML = resultado;
  // El elemento 'tablaMultiplicar9' es modificada con los resultados.
}

// Aquí borramos los contenidos de las tablas, yjunto a 'cerrarTablas' solo hay 1 abierta a la vez.
function cerrarTablas() {
  document.getElementById("tablaMultiplicar7").innerHTML = "";
  document.getElementById("tablaMultiplicar8").innerHTML = "";
  document.getElementById("tablaMultiplicar9").innerHTML = "";
}
