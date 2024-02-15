//Clase paciente y métodos--------------------------------------------------
class paciente{
    constructor(nhc,nombre,apellidos,fdn,sexo){
        this.nhc = nhc;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fdn = fdn; //fecha de nacimiento
        this.sexo = sexo;
        this.historial = []; //array para el historial
    }
    modificarnhc(){
        if(confirm('¿Desea modificar el NHC del paciente?')){
            this.nhc = prompt('Introduzca nuevo NHC:');
            alert(`Nuevo NHC: ${this.nhc}`);
        }
    }
    modificarnombre(){
        if(confirm('¿Desea modificar el nombre del paciente?')){
            this.nombre = prompt('Introduzca nuevo nombre:');
            alert(`Nuevo nombre: ${this.nombre}`);
        }
    }
    modificarapellidos(){
        if(confirm('¿Desea modificar los apellidos del paciente?')){
            this.apellidos = prompt('Introduzca nuevos apellidos:');
            alert(`Nuevos Apellidos: ${this.apellidos}`);}
    }
    modificarfdn(){
        if(confirm('¿Desea modificar la fecha de nacimiento del paciente?')){
            this.fdn = prompt('Introduzca nueva fecha de nacimiento:');
            alert(`Nueva Fecha de Nacimiento: ${this.fdn}`);}
    }
    modificarsexo(){
        if(confirm('¿Desea modificar el sexo del paciente?')){
            this.sexo = prompt('Introduzca nuevo sexo del paciente:');
            alert(`Nuevo sexo: ${this.sexo}`);}
    }
    agregarHistorial(){
        if(confirm('¿Desea agregar episodio al historial?')){
            let ID = prompt('Introduzca n.º de episodio:');
            let fecha = prompt('Introduzca fecha:');
            let Dx = prompt('Introduzca diagnóstico:');
            let Tto = prompt('Introduzca tratamiento:');
            let Doc = prompt('Introduzca responsable:');
            this.historial.push({'ID': ID,'Fecha': fecha,'Diagnóstico': Dx,'Tratamiento': Tto,'Responsable': Doc});
        }
    }
    modificarEpisodioPorID() {
        if (confirm('¿Desea modificar un episodio en el historial por ID?')) {
            let idEpisodio = prompt('Introduzca el ID del episodio a modificar:');
            for (let i = 0; i < this.historial.length; i++) {
                if (this.historial[i].ID === idEpisodio) {

                    this.historial[i].Fecha = prompt('Introduzca nueva fecha:');
                    this.historial[i].Diagnóstico = prompt('Introduzca nuevo diagnóstico:');
                    this.historial[i].Tratamiento = prompt('Introduzca nuevo tratamiento:');
                    this.historial[i].Responsable = prompt('Introduzca nuevo responsable:');
                    
                    alert('Episodio modificado correctamente.');
                }
            }
        }
    }
}

//Manejo del formulario-----------------------------------------------

let pacienteActual = null;

function crearNuevo(){
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let nhc = document.getElementById('nhc').value;
    let sexo = document.getElementById('sexo').value;
    let fdn = document.getElementById('fechaNacimiento').value;
    pacienteActual = new paciente(nhc,nombre,apellidos,fdn,sexo);
    document.getElementById('datospaciente').value = `NHC: ${nhc}\nNombre completo: ${nombre} ${apellidos}\nSexo: ${sexo}\nFecha de nacimiento: ${fdn}`
    return false; //Dar ayuda aquí para evitar el comportamiento por defecho del formulario.
}
function modificarNHC(){
    pacienteActual.modificarnhc();
    document.getElementById('datospaciente').value = `NHC: ${pacienteActual.nhc}\nNombre completo: ${pacienteActual.nombre} ${pacienteActual.apellidos}\nSexo: ${pacienteActual.sexo}\nFecha de nacimiento: ${pacienteActual.fdn}`
    }
function modificarNombre(){
    pacienteActual.modificarnombre();
    document.getElementById('datospaciente').value = `NHC: ${pacienteActual.nhc}\nNombre completo: ${pacienteActual.nombre} ${pacienteActual.apellidos}\nSexo: ${pacienteActual.sexo}\nFecha de nacimiento: ${pacienteActual.fdn}`
    }
function modificarApellidos(){
    pacienteActual.modificarapellidos();
    document.getElementById('datospaciente').value = `NHC: ${pacienteActual.nhc}\nNombre completo: ${pacienteActual.nombre} ${pacienteActual.apellidos}\nSexo: ${pacienteActual.sexo}\nFecha de nacimiento: ${pacienteActual.fdn}`
    }
function modificarFecha(){
    pacienteActual.modificarfdn();
    document.getElementById('datospaciente').value = `NHC: ${pacienteActual.nhc}\nNombre completo: ${pacienteActual.nombre} ${pacienteActual.apellidos}\nSexo: ${pacienteActual.sexo}\nFecha de nacimiento: ${pacienteActual.fdn}`
    }
function modificarSexo(){
    pacienteActual.modificarsexo();
    document.getElementById('datospaciente').value = `NHC: ${pacienteActual.nhc}\nNombre completo: ${pacienteActual.nombre} ${pacienteActual.apellidos}\nSexo: ${pacienteActual.sexo}\nFecha de nacimiento: ${pacienteActual.fdn}`
    }
function agregarHistorial(){
    pacienteActual.agregarHistorial();
    let text = '';
    for(let i = 0; i < pacienteActual.historial.length; i++){
         text += `ID episodio: ${pacienteActual.historial[i].ID} Fecha episodio: ${pacienteActual.historial[i].Fecha}\nDiagnóstico: ${pacienteActual.historial[i].Diagnóstico}\nTratamiento: ${pacienteActual.historial[i].Tratamiento}\nResponsable: ${pacienteActual.historial[i].Responsable}\n----------------\n`;
    }
    document.getElementById('historial').value = text;
}
function modificarEpisodio() {
    if (pacienteActual) {
        pacienteActual.modificarEpisodioPorID();
        let text = '';
        for(let i = 0; i < pacienteActual.historial.length; i++){
             text += `ID episodio: ${pacienteActual.historial[i].ID} Fecha episodio: ${pacienteActual.historial[i].Fecha}\nDiagnóstico: ${pacienteActual.historial[i].Diagnóstico}\nTratamiento: ${pacienteActual.historial[i].Tratamiento}\nResponsable: ${pacienteActual.historial[i].Responsable}\n----------------\n`;
        }
        document.getElementById('historial').value = text;
    }
}
function limpiar(){
    if(confirm('¿Desea limpiar la ventana actual?')){
        window.location.reload();
    }
}

document.getElementById('crearnuevo').onclick = crearNuevo;
document.getElementById('modificarNHC').onclick = modificarNHC;
document.getElementById('modificarNombre').onclick = modificarNombre;
document.getElementById('modificarApellidos').onclick = modificarApellidos;
document.getElementById('modificarFecha').onclick = modificarFecha;
document.getElementById('modificarSexo').onclick = modificarSexo;
document.getElementById('agregarDxyTto').onclick = agregarHistorial;
document.getElementById('modificarEpisodio').onclick = modificarEpisodio;
document.getElementById('limpiar').onclick = limpiar;