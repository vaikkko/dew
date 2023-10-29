function abrirVentana() {

  var ventanaNueva = window.open("","_blank","width=800,height=600,resizable=no");

  ventanaNueva.document.write("<h3>Ejemplo de Ventana Nueva</h3>");
  ventanaNueva.document.write("URL Completa: " + ventanaNueva.location.href + "<br>");
  ventanaNueva.document.write("Protocolo utilizado: " + ventanaNueva.location.protocol + "<br>");
  ventanaNueva.document.write("<p>Java NO disponible en esta ventana</p>");
  ventanaNueva.document.write('<iframe src="https://www.google.es" width="800" height="600"></iframe>');
}

function formulario() {

  // Introducimos los datos:
  alert("Por favor, rellena el formulario.");
  var nombre = prompt("Introduce nombre y apellidos");
  var dia = prompt("Introduce DIA de nacimiento");
  var mes = prompt("Introduce MES de nacimiento");
  var año = prompt("Introduce AÑO de nacimiento");

  // Escribimos las lineas relacionadas con el nombre:
  document.write("<h1>TAREA DWEC03</h2><hr />");
  document.write("Buenos días " + nombre + "<br>");
  document.write("Tu nombre tiene " + nombre.length + " caracteres, incluidos espacios.<br>");
  document.write("La primera letra A de tu nombre está en la posición: " +(nombre.indexOf("a") + 1) +"<br>");
  document.write("La última letra A de tu nombre está en la posición: " +(nombre.lastIndexOf("a") + 1) +"<br>");
  document.write("Tu nombre menos las 3 primeras letras es: " + nombre.slice(3) + "<br>");
  document.write("Tu nombre todo en mayúsculas es: " + nombre.toUpperCase() + "<br>");

  // Aquí hacemos los calculos de la edad:
  var fechaNacimiento = new Date(año, mes - 1, dia);
  var hoy = new Date();
  var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  document.write("Tu edad es: " + edad + " años.<br>");
  document.write("Naciste un feliz " + dia + " del mes " + mes + " del año " + año + ".<br>");
  
  // Por ultimo los calculos concretos:
  var grados = 180;
  var radianes = grados * (Math.PI / 180); 
  document.write("El coseno de 180 es: " + Math.cos(radianes) + "<br>");  
  
  var numeros = [34, 67, 23, 75, 35, 19];
  var numeroMayor = Math.max.apply(null, numeros);
  document.write("El número mayor de (34,67,23,75,35,19) es: " + numeroMayor + "<br>");

  // Le he añadido un x10 porque todo el rato me salian numeros al azar del 0 al 1 ( 0,2342342 )
  var numeroAzar = 10*(Math.random()); 
  document.write("Ejemplo de número al azar: " + numeroAzar + "<br>");
}
