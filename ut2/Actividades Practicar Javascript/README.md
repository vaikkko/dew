# Actividades Prácticas Unidad Didáctica 2
### Unidad de Trabajo 2: Estructura del Lenguaje Javascript

1. **Actividad** :  Tal y como ya hemos visto, hemos visto que en ciertas ocasiones el motor de ejecución de javascript puede estar apagado en el cliente, ya sea de forma voluntaria o involuntaria. En tales casos, conviene incluir un aviso empleando para ello las etiquetas <noscript>mensaje</noscript>. Añade dicha etiqueta en el código de una página y prueba el efecto desactivando para ello javascript en el navegador.

<br>

2. **Actividad**:Indica el valor que generan las siguientes expresiones y el tipo de datos de los mismos (emplea para ello la función typeof()):

    a. 2 > 3 +2 = 
    b. 1 + false +3.5 = 
    c. 4 * true + 2 = 
    d. 5 / 0 = 
    e. 10 > 2 > 0 = 
    f. 15 < 3 * 10 = 
    g. 3 * hola + 2 = 
    h. 5 / “hola” = 
    i. π * 32 = 
    k. “Tienes” + 23 + “años” = 

3. **Actividad**: ¿Qué valor producirán las siguientes expresiones?

    a. parseInt("15");
    b. parseInt("15.5")
    c. parseInt(15.5)
    d. parseInt("true")
    e. parseInt(true)
    f. parseInt("Pedro")
    g. parseInt(15 + "Pedro")
    h. parseFloat("15.5")
    i. parseFloat(15.5)

4. **Actividad**: Observa el siguiente código. a) ¿La variable nombre se define de modo local o global? b) Copia y ejecuta el código para probar su funcionalidad. En caso de no funcionar cámbialo para solucionar el problema.

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

    a. 16 << 2
    b. 8 > 10 ? v1 = “sí” : v1 = “no”
    c. var n=7; alert(“n vale “ + (++n));
    d. var m=17; alert("m vale " + (m++)); alert(m);
    e. 3 ^ 2
    f. var y=17; y%=5;
    g. var caja = ["percha", "balón"]; alert(caja[1]);
    h. var a=3,b=6; var h = a > b ? a : b;

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
a) ¿Muestran la misma información el primer y el segundo bucle?
b) ¿Cuál es la diferencia entre los mismos?
c) ¿Existe diferencia entre ++i e i++?
d) ¿Qué muestra el siguiente código: 

```js
arr.forEach(function(i){console.log(i)}); 
```