function Paciente(nhc, nombre, apellidos, fechaNac, sexo) {
  this.nhc = nhc;
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.fechaNac = fechaNac;
  this.sexo = sexo;
  this.historial = [];

  const episodio = [
        {
            id:prompt("Añade ID:"),
            fecha:Date.now(),
            diagnostico:prompt("Introduce el diagnostico:"),
            tratamiento:prompt("Introduce el tratamiento a seguir:"),
            medicoResponsable:prompt("Introduce el nombre del medico que lo trato:"),
        }
    ]

  console.log(
    `Nuevo paciente: ${nombre} ${apellidos}, nacido el ${fechaNac}, sexo : ${sexo}, Nº Historia Clínica: ${nhc} . `
  );
}



Paciente.prototype.imprimirHistorial = function (historial) {

    for(var i=0; i<this.historial.length; i++){
        console.log(historial[i].id);
        console.log(historial[i].fecha);
        console.log(historial[i].diagnostico);
        console.log(historial[i].tratamiento);
        console.log(historial[i].medicoResponsable);
    }
}

Paciente.prototype.cambiarHistorial = function (nuevoHistorial) {

  for(var i = 0;this.historial.length; i++){
    
  }
}
   
Paciente.prototype.cambiarNHC = function (nuevoNHC) {
  this.nhc = nhc;

  console.log(`Se ha modificado el Nº de Historia Clínica a: ${nuevoNHC}`);
};

Paciente.prototype.cambiarNombre = function (nuevoNombre) {
  this.nombre = nombre;

  console.log(`Se ha modificado el nombre del paciente a: ${nuevoNombre}`);
};
Paciente.prototype.cambiarApellidos = function (nuevosApellidos) {
  this.apellidos = apellidos;

  console.log(
    `Los nuevos apellidos del paciente se han modificado, ahora son: ${nuevosApellidos}`
  );
};

Paciente.prototype.cambiarFechaNac = function (nuevaFechaNac) {
  this.fechaNac = fechaNac;

  console.log(
    `Se ha modificado la fecha de nacimiento debido a un error, la correcta sería:  
    ${nuevaFechaNac}`
  );
};
Paciente.prototype.cambiarSexo = function (nuevoSexo){
    
    this.sexo = sexo;

    console.log(`Se ha modificado el sexo del paciente a:  ${nuevoSexo}`)
}

const Paciente1 = new Paciente("P1","Victor","Martinez Lopez","28/10/92","Masculino");
const Paciente2 = new Paciente("P2","Natalia","Cerezo Garcia","11/11/97","Femenino");
const Paciente3 = new Paciente("P3","David","Urbano Gomez","18/09/91","Masculino");

const reload = document.getElementById("reload");

reload.addEventListener("click", () => {
  location.reload();
});

