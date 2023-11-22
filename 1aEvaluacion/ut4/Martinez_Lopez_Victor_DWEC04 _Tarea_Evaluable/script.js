// Este seria el constructor del Edificio
function Edificio(calle, numero, codigoPostal) {
  this.calle = calle;
  this.numero = numero;
  this.codigoPostal = codigoPostal;
  this.plantas = [];

  console.log(`Edifcio en Calle : ${calle}, nº: ${numero}, CP: ${codigoPostal}.`);
}

 // Agregamos plantas 
Edificio.prototype.agregarPlantasYPuertas = function(numPlantas, puertasPorPlanta) {
  // Comprobamos 
  if (numPlantas <= 0 || puertasPorPlanta <= 0) {
    console.log("El número no es válido");
    return;
  }

  // Creamos puertas y plantas
  for (let i = 0; i < numPlantas; i++) {
    let planta = {
      puertas: []
    };

    // Agregamos las puertas a la planta
    for (let j = 1; j <= puertasPorPlanta; j++) {
      planta.puertas.push({ propietario: null });
    }

    // Agregamos la planta al edificio
    this.plantas.push(planta);
  }

  console.log(`Hay ${numPlantas} plantas con ${puertasPorPlanta} puertas cada una.`);
};

// Método modificar el número del edificio
Edificio.prototype.modificarNumero = function(nuevoNumero) {
  this.numero = nuevoNumero;
  console.log(`El nuevo numero es: ${nuevoNumero}.`);
};

// Método modificar el nombre de la calle 
Edificio.prototype.modificarCalle = function(nuevaCalle) {
  this.calle = nuevaCalle;
  console.log(`La nueva calle es: ${nuevaCalle}.`);
};

// Método modificar el código postal
Edificio.prototype.modificarCodigoPostal = function(nuevoCodigo) {
  this.codigoPostal = nuevoCodigo;
  console.log(`El nuevo código postal es:  ${nuevoCodigo}.`);
};

// Método imprimir la calle
Edificio.prototype.imprimeCalle = function() {
  console.log(`Calle del edificio: ${this.calle}`);
};

// Método imprimir el número del edificio
Edificio.prototype.imprimeNumero = function() {
  console.log(`Número del edificio: ${this.numero}`);
};

// Método imprimir el código postal
Edificio.prototype.imprimeCodigoPostal = function() {
  console.log(`Código postal del edificio: ${this.codigoPostal}`);
};

// Método agregar  propietario
Edificio.prototype.agregarPropietario = function(nombre, planta, puerta) {
  if (planta >= 0 && planta < this.plantas.length && puerta >= 0 && puerta < this.plantas[planta].puertas.length) {
    this.plantas[planta].puertas[puerta].propietario = nombre;
    console.log(`${nombre} es ahora el propietario de la puerta ${puerta + 1} de la planta ${planta + 1}.`);
  } else {
    console.log("No existe.");
  }
};

// Método imprimir los propietarios
Edificio.prototype.imprimePlantas = function() {
  console.log(`Lista de propietarios del edificio calle ${this.calle} número ${this.numero}\n`);

  this.plantas.forEach((planta, numPlanta) => {
    planta.puertas.forEach((puerta, numPuerta) => {
      console.log(`Propietario del piso ${numPuerta + 1} de la planta ${numPlanta + 1}: ${puerta.propietario || "Sin propietario"}.`);
    });
  });

  console.log(); 
};

// Creamos edificios 
const edificioA = new Edificio("Garcia Prieto", 58, "15706");
const edificioB = new Edificio("Camino Caneiro", 29, "32004");
const edificioC = new Edificio("San Clemente", "s/n", "15705");

// Acceder y mostrar información específica de los edificios
console.log(`El código postal del edificio A es: ${edificioA.codigoPostal}.`);
console.log(`La calle del edificio C es: ${edificioC.calle}.`);
console.log(`El edificio B está situado en la calle ${edificioB.calle} número ${edificioB.numero}.`);

// Agregamos plantas y puertas al edificio A
edificioA.agregarPlantasYPuertas(2, 3);

// Agregamos propietarios al edificio A
edificioA.agregarPropietario("Jose Antonio Lopez", 0, 0);
edificioA.agregarPropietario("Luisa Martinez", 0, 1);
edificioA.agregarPropietario("Marta Castellón", 0, 2);
edificioA.agregarPropietario("Antonio Pereira", 1, 1);

// Imprimimos propietarios del edificio A
edificioA.imprimePlantas();

// Agregamos una planta más al edificio A
edificioA.agregarPlantasYPuertas(1, 3);

// Agregamos un propietario más al edificio A en planta 3, puerta 2
edificioA.agregarPropietario("Pedro Meijide", 2, 1);

// Imprimimos propietarios actualizados del edificio A
edificioA.imprimePlantas();

