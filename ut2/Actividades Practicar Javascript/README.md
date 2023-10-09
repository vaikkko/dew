# Actividades Prácticas Unidad Didáctica 2
### Unidad de Trabajo 2: Estructura del Lenguaje Javascript

1. **Actividad** :  Tal y como ya hemos visto, hemos visto que en ciertas ocasiones el motor de ejecución de javascript puede estar apagado en el cliente, ya sea de forma voluntaria o involuntaria. En tales casos, conviene incluir un aviso empleando para ello las etiquetas <noscript>mensaje</noscript>. Añade dicha etiqueta en el código de una página y prueba el efecto desactivando para ello javascript en el navegador.

<br>

2. **Actividad**:Indica el valor que generan las siguientes expresiones y el tipo de datos de los mismos (emplea para ello la función typeof()):

    - 2 > 3 +2 = **false ; typeof(2>3+2) = "bollean"**
    - 1 + false +3.5 = **4.5 ; typeof(1 + false + 3.5) = "false"**
    - 4 * true + 2 = 6 ; **typeof(4 * true + 2 ) = "number"**
    - 5 / 0 = Infinity ; **typeof(5/0) = "number"**
    - 10 > 2 > 0 = false ; **typeof(10>2<0) = "boolean"**
    - 15 < 3 * 10 = true ; **typeof(15 < 3 * 10) = "boolean"**
    - 3 * hola + 2 = ReferenceError: **hola is not defined**
    - 5 / “hola” = SyntaxError: **illegal character: illegal character**
    - π * 32 = ReferenceError: **π is not defined** 
    - “Tienes” + 23 + “años” = **SyntaxError: illegal character**

3. **Actividad**: ¿Qué valor producirán las siguientes expresiones?

    - parseInt("15"); **15**
    - parseInt("15.5") **15**
    - parseInt(15.5) **15**
    - parseInt("true") **NaN**
    - parseInt(true) **NaN**
    - parseInt("Pedro") **NaN**
    - parseInt(15 + "Pedro") **15**
    - parseFloat("15.5") **15.5**
    - parseFloat(15.5) **15.5** 

4. **Actividad**: Observa el siguiente código. 
-  ¿La variable nombre se define de modo local o global? **Local, al encontrarse dentro de la función.**
-  Copia y ejecuta el código para probar su funcionalidad. En caso de no funcionar cámbialo para solucionar el problema.

    ```js
    <script>
        function saludar(){
            var nombre = "Pedro";
            alert("Hola" + nombre);
        }
        alert("Usuario: " + nombre);
        saludar();
    </script>
    ```
5. **Actividad**: ¿Qué valor se obtendrá al ejecutar estas expresiones?

    -  16 << 2  = **64**
    -  8 > 10 ? v1 = “sí” : v1 = **“no”**
    -  var n=7; alert(“n vale “ + (++n)); = **yntaxError: unexpected token: identifier**
    -  var m=17; alert("m vale " + (m++)); alert(m); = **Alerta mensaje = "m vale 17" + Alerta mensaje = "18"**
    -  3 ^ 2 = **1**
    -  var y=17; y%=5;
    -  var caja = ["percha", "balón"]; alert(caja[1]); = **Alerta mensaje : "balón"**
    -  var a=3,b=6; var h = a > b ? a : b; = **undefined**

6. Observa el siguiente código:
```js
var arr=[1,2,3,4];
  for(var i=0; i < arr.length; i++) {
   console.log(arr[i]);
  }
  for(var i=0, len=arr.length; i < len; ++i) {
   console.log(arr[i]);
  } 
  ```
-  ¿Muestran la misma información el primer y el segundo bucle? **SI**
-  ¿Cuál es la diferencia entre los mismos?
-  ¿Existe diferencia entre ++i e i++?
<br>
-  ¿Qué muestra el siguiente código: 

```js
arr.forEach(function(i){console.log(i)}); 
```
- ¿Y el siguiente?
```js
 for (i of arr) {
  console.log(i);
 }
 ```

 7. **Actividad**: Realiza un programa en JavaScript que calcule el área y el perímetro de una circunferencia de radio 5 m. A continuación, modifica dicho código para que el usuario pueda introducir el radio. Recuerda que para seleccionar un elemento desde HTML debes usar la instancia document.getElementById(""). Algunas funciones predefinidas necesarias/útiles para esta tarea son:

    - document.getElementById('').value: devuelve el valor de un elemento HTML.
    - parseFloat()
    - Math.PI: devuelve el número real pi.
    - El modificador .innerHTML que permite seleccionar un elemento HTML y modificar su contenido.
    - toFixed(): permite redondear a un determinado número de decimales.

8. **Activida**:  JavaScript puede manejar los eventos de una página web para conocer, por ejemplo, cuando el ratón pasa sobre un elemento. Aquí tienes un código que sirve de ejemplo para los siguientes eventos: onmouseover, onmouseout, onblur. Cópialo y ejecútalo para analizar su función:

```js
        <h1>Ejemplo de Eventos onmouseover, onmouseout y onblur.</h1>
            <div id="miDiv" onmouseover="mostrarMensaje('Mouse sobre el div')" onmouseout="mostrarMensaje('Mouse fuera del div')">
            <p>¡Pasa el mouse sobre este div!</p>
                
            <input type="text" onblur="mostrarMensaje('El campo de texto ha perdido el foco')" placeholder="Escribe algo y luego haz clic fuera">
            </div>
            <p id="mensaje"></p>
            <script>
            function mostrarMensaje(mensaje) {
            document.getElementById('mensaje').innerHTML = mensaje;
            }
            </script>
```

9. **Actividad**: Crea una página HTML que permita al usuario calcular una propina según el total de la factura a pagar. Esta web debe permitir al usuario introducir el monto total de la factura; seleccionar un porcentaje de propina a pagar (10, 15 0 20%) y obtener en pantalla el valor de la propina.

10. **Actividad**: Observa y analiza la función del siguiente código. A continuación modifica el código para que sea el usuario el que escoja el número de filas del rombo.

```js
        <!DOCTYPE html>
        <html>
        <head>
            <title>Rombo de emoticonos</title>
        </head>
        <body>

            <div id="rombo" style="text-align: center"></div>
            
            <script>
                    function dibujarRombo(filas) {
                        
                        let output = '';
                        
                        //Parte creciente del rombo:
                        for (let i = 1; i <= filas; i++){
                            let linea = '';
                            for (let j = 1; j <= 2 * i - 1; j++) {
                                linea += '*';
                            }
                            output += linea + '<br>';
                        }
                        
                        //Parte decreciente del rombo:
                        for (let i = filas - 1; i >= 1; i--) {
                            let linea = '';
                            for (let j = 1; j <= 2 * i - 1; j++) {
                                linea += '*';
                            }
                            output += linea + '<br>';
                        }
                        document.getElementById('rombo').innerHTML = output;
                    }
                    dibujarRombo(15); //Ejecutamos la función.    
            </script>
        </body>
        </html>

```

11. **Actividad**: Crea una web sencilla que permita al usuario introducir un número de entrada y obtener todos los divisores del mismo. Para ello, algunas funciones a tener en cuenta además de las vistas anteriormente son:
- parseInt()
- %: devuelve el módulo o resto de una división.

12. **Actividad**:  Basándote en la actividad anterior, crea una web que permita al usuario obtener un determinado número de valores ordenados de la sucesión de Fibonacci (La matemática incrustada en la inmensa variedad de formas de vida)  en la que cada término se obtiene como suma de los dos anteriores:

            0, 1, 1, 2, 3, 5, 8, 13...

Un modificador de utilidad para esta tarea es el ".push()", el cual permite añadir nuevos elementos a un array cualquiera previamente definido.
