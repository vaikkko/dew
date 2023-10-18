**Actividad 1.**  Programar una página web que permita al usuario abrir una     subventana con un formulario de registro que una vez confirmado imprima los datos en la ventana principal. La aplicación debe hacer lo siguiente:

    Redirigir al usuario a una nueva ventana después de haber pulsado un botón.
    Lanzar un mensaje de alerta pidiendo al usuario que confirme que desea abrir una nueva ventana. En caso afirmativo, redirigir al usuario al formulario. En caso negativo, emitir una alerta en la ventana principal indicando que no se pudo completar el registro.
    El formulario debe permitir completar nombre, apellidos, dirección (incluyendo calle, código postal, localidad y municipio) así como teléfono y correo electrónico.
    Una vez validador el formulario los resultados se mostrarán en la ventana principal.

**Actividad 2.** Crea una página con un botón que permita al usuario cambiar el título de la página.

**Actividad 3.** Realiza un script que permita al usuario introducir una frase y determinar el número total de caracteres así como la última posición en la que aparece una determinada palabra ingresada por el usuario.

**Actividad 4.** Realiza una página web que redirija al usuario a la página de google (conservando el historial) si sacando un número de forma aleatoria entre 0 y 10 el mismo es menor o igual a 5. En caso contrario, que la página genere una alerta saludando con buenos días o buenas tardes en función de si es antes de las 12 am o después.

**Actividad 5.** Modifica la calculadora elaborada como tarea de la unidad 2 y añade dos botones que permitan calcular la potencia de un número.

**Actividad 6.** Crea una página que funcione como un cronómetro con botones para iniciar, detener y reiniciar.

**Actividad 7.** Crea una web que permita al usuario establecer una fecha y hora para una cuenta atrás.
**Actividad 8.** Analiza los siguientes códigos. A continuación, programa tu propio generador de historias aleatorias:

    ```html
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
    <head>
    <meta charset="utf-8">
    <title>Historias de Leperos y Murcianos</title>
    </head>
    <body>

        <label for="nombre"><strong>Nombre del Protagonista:</strong></label><br />
        <input type="text" id="nombre" required /><br /><br />

        <label for="lepero"><strong>LEPERO:</strong></label>
        <input type="radio" name="localidad" value="lepero" id="lepero"/>

        <label for="murciano"><strong>MURCIANO:</strong></label>
        <input type="radio" name="localidad" value="murciano" id="murciano"/>

        <br /><br />

        <input type="button" id="btnSubmit" value="Generar Historia" />

    <p id="texto" style="width: 40%; background-color: #FFC126; color:black;"></p>

    <script src="./script/script.js"></script>
    </body>

    </html>
    ```

**Archivo de script:**

        ```js
        var texto = document.getElementById('texto');
        var button = document.getElementById('btnSubmit');

        if(document.getElementById('lepero').checked){
        button.addEventListener("click", creaHistoriaLepero, false);
        }else{
        button.addEventListener("click", creaHistoriaMurciano, false);
        }

        function creaHistoriaMurciano() {

        texto.innerHTML = "";
        var nombre = document.getElementById('nombre').value.toString();

        var historiasMurciano = [

        "En Murcia las naranjas siempre han sido muy baratas, pero ahora le parecen caras.",
        "La ciudad se llena siempre en verano, pero en invierno es un desierto. ",
        "" + nombre + " visitaba a su abuela, ella siempre le hacía buena comida. ",
        "La Juventud lo dejó deprimido y ahora " + nombre + " solo tiene a su peluche. ",
        "No tenía ganas de hacer deporte así que " + nombre + " engordo hasta el límite. ",
        "Los donuts eran su debilidad, pero últimamente estaba comportándose de forma extraña. ",
        "" + nombre + " antes era calvo, pero se hizo un injerto capilar. "

        ];

        while (historiasMurciano.length > 0) {

        var nAleatorio = Math.round(Math.random() * historiasMurciano.length -1);

        if(historiasMurciano[nAleatorio] == undefined){
            nAleatorio = Math.round(Math.random() * historiasMurciano.length -1);
        }else{
            texto.innerHTML += historiasMurciano[nAleatorio];
            historiasMurciano.splice(nAleatorio, 1);
        }
        }
        }

        function creaHistoriaLepero() {

        texto.innerHTML = "";
        var nombre = document.getElementById('nombre').value.toString();

        var historiasLepero = [

        "En Lepe las flores se marchitan en Primavera, así que no había excusa. ",
        "" + nombre + " era una persona modesta que conducía un Ford Ka. ",
        "Cada semana " + nombre + " visitaba a sus padres. ",
        "Cualquiera lo hubiera adivinado. ",
        "Llovía fuerte aquella noche y " + nombre + " no podía dejar de pensar en los campos de fresas. ",
        "A " + nombre + " no le gustaba la informática. "

        ];

        while (historiasLepero.length > 0) {

        var nAleatorio = Math.round(Math.random() * historiasLepero.length -1);

        if(historiasLepero[nAleatorio] == undefined){
            nAleatorio = Math.round(Math.random() * historiasLepero.length -1);
        }else{
            texto.innerHTML += historiasLepero[nAleatorio];
            historiasLepero.splice(nAleatorio, 1);
        }
        }
        }
        ```