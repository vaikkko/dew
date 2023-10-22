function calcular() {
  // Aquí obtnemos los valors que el usuario introduce en el html.
  const numero = parseInt(document.getElementById("numero").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const tipo = document.getElementById("tipo").value;
  let resultado;

  // Comprobamos que tipo de operación quiere realizar
  if (tipo === "izquierda") {
    resultado = numero << cantidad;
  } else if (tipo === "derecha") {
    resultado = numero >> cantidad;
  } else {
    resultado = "Operación no válida"; // añadimos una opción de error
  }
  // Aquí mostramos el resultado en el id 'resultado' en el hrml.
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}
