$(function () {
  // Añadimos un contador a 0 para luego validar mas tarde.
  let contador = 0;

  // Seleccionamos los elementos del DOM.
  let selectProv = $("#provincia");
  let selectMuni = $("#municipio");

  // Obtenemos los dato de las provincias del fichero "provincias.php", convierto la respuesta en formato JSON y cambiamos el valor de la provincia al seleccionado
  fetch("provincias.php")
    .then((response) => response.json())
    .then((data) => {
      Object.keys(data).forEach((key) => {
        let value = data[key];
        let option = $("<option>").attr("value", key).text(value);
        selectProv.append(option);
      });
    });

  selectProv.on("change", () => {
    let numProvincia = selectProv.val();
    getMunicipio(numProvincia);
  });

  // Obtenemos los municipios del "municipios.php" pasando el numero de Provincia y se actualiza el elemento.
  function getMunicipio(numProvincia) {
    fetch("municipios.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `provincia=${numProvincia}`,
    })
      .then((response) => response.json())
      .then((data) => {
        selectMuni.html("");
        Object.keys(data).forEach((key) => {
          let value = data[key];
          let option = $("<option>").attr("value", key).text(value);
          selectMuni.append(option);
        });
      });
  }

  // Validamos el nombre
  $("#nombre").blur(function () {
    const value = $("#nombre").val().trim();
    if (value.length === 0) {
      $("#errores").html("No puedes dejar el Nombre en blanco.");
    } else {
      $("#nombre").val(value.toUpperCase());
      $("#errores").html("");
      contador++;
    }
  });

  // Validamos los apellidos:
  $("#apellidos").blur(function () {
    const value = $("#apellidos").val().trim();
    if (value.length === 0) {
      $("#errores").html("No puedes dejar los Apellidos en blanco.");
    } else {
      $("#apellidos").val(value.toUpperCase());
      $("#errores").html("");
      contador++;
    }
  });

  // Validamos el DNI:
  $("#dni").blur(function () {
    const value = $("#dni").val().toUpperCase();
    const pat = /^(\d{8})-?([A-Za-z])$/;
    if (value.length === 0) {
      console.log("El número NIF es obligatorio");
      $("#errores").html("El campo NIF es obligatorio");
    } else if (!pat.test(value)) {
      $("#errores").html(
        "No es un número NIF válido, debe tener el formato 12345678-A."
      );
    } else {
      const match = value.match(pat);
      const numeroDNI = match[1];
      const letraDNI = match[2];

      const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      const letraCorrecta = letras.charAt(numeroDNI % 23);

      if (letraDNI !== letraCorrecta) {
        $("#errores").html("La letra del DNI no es correcta.");
      } else {
        $("#errores").html("");
        contador++;
      }
    }
  });

  // Validar dirección
  $("#direccion").blur(function () {
    const value = $("#direccion").val().trim();
    if (value.length === 0) {
      $("#errores").html("El campo Dirección es obligatorio.");
    } else {
      $("#errores").html("");
      contador++;
    }
  });

  // Validar Codigo Postal
  $("#cpostal").blur(function () {
    const value = $("#cpostal").val().trim();
    const pat = /^\d{5}$/; // Expresión regular para 5 dígitos
    if (value.length === 0) {
      $("#errores").html("El campo Código Postal es obligatorio.");
    } else if (!pat.test(value)) {
      $("#errores").html("Introduce un código postal válido de 5 dígitos.");
    } else {
      $("#errores").html("");
      contador++;
    }
  });

  //Validamos el Email:
  $("#email").blur(function () {
    const value = $("#email").val();
    const pat = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
    if (value.length === 0) {
      $("#errores").html("El campo Email es obligatorio");
    } else if (!pat.test(value)) {
      $("#errores").html("Escribe un Emaill válido");
    } else {
      $("#errores").html("");
      contador++;
    }
  });

  // Validamos la Provincia:
  $("#provincia").blur(function () {
    const value = $("#provincia").val();
    if (value === "0") {
      $("#errores").html("Seleccionar una Provincia es obligatorio.");
    } else {
      $("#errores").html("");
      contador++;
    }
  });

  // Validamos el Municipio
  $("#municipio").blur(function () {
    const value = $("#municipio").val();
    if (value === "0") {
      $("#errores").html("Seleccionar un Municipio es obligatorio.");
    } else {
      $("#errores").html("");
      contador++;
    }
  });

  // Validamos la fecha:
  $("#fecha").blur(function () {
    const value = $("#fecha").val();
    const pat =
      /^(?:(?:(?:0?[1-9]|1\d|2[0-8])\/(?:0?[1-9]|1[0-2])|(?:29|30)\/(?:0?[13-9]|1[0-2])|31\/(?:0?[13578]|1[02]))\/(?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29\/0?2\/(?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/;
    // Encontré esta expresión regular que admite fechas de años bisiestos.
    
    if (value.length === 0) {
      $("#errores").html("El campo Fecha es obligatorio");
    } else if (!pat.test(value)) {
      $("#errores").html("Introduce una fecha válida, dd/mm/aaaa.");
    } else {
      $("#errores").html("");
      contador++;
    }
  });

  // Validamos el Telefono
  $("#telefono").blur(function () {
    const value = $("#telefono").val();
    const pat = /^([6789][0-9]{8,13})$/;
    if (value.length === 0) {
      $("#errores").html("No puedes dejar el campo Teléfono en blanco");
    } else if (!pat.test(value)) {
      $("#errores").html("Escribe un teléfono válido");
    } else {
      $("#errores").html("");
      contador++;
    }
  });

  $("#formulario").submit(function (e) {
    e.preventDefault();

    // Verificamos si hay campos vacíos
    let camposVacios = $("input[type='text']").filter(function () {
      return $(this).val().trim() === "";
    }).length;

    if (camposVacios > 0) {
      alert(
        "Hay campos vacíos en el formulario. Por favor, complete todos los campos."
      );
    } else {
      if ($("#condiciones").prop("checked")) {
          // Mediante el contador comprobamos que todo funcione bien
        if (contador === 10) {
          var eleccion = confirm(
            "¿Estas seguro de que quieres enviar los datos?"
          );
          if (eleccion === true) {
            alert("Has enviado los datos correctamente");
          } else {
            alert("Has cancelado el envio");
          }
        }
      } else {
        $("#errores").html(
          "Debes aceptar los términos y condiciones para enviar el formulario."
        );
      }
    }
  });

  // Con esta función reseteamos todos los valores del formulario, tanto los datos como el contador.
  $("#limpiar").click(function () {
    $("input[type='text']").val("");
    $("select").val("0");
    $("#condiciones").prop("checked", false);
    $("#errores").html("");
    contador = 0;
  });
});
