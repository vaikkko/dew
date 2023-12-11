//Clase paciente y métodos--------------------------------------------------
class paciente{
    constructor(nhc,nombre,apellidos,fdn,sexo){
        this.nhc = nhc;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fdn = fdn; //fecha de nacimiento
        this.sexo = sexo;
        this.historial = []; //array para el historial
        alert(`Creado paciente ${nombre} ${apellidos}, ${sexo}, con NHC: ${nhc} y fecha de nacimiento ${fdn}`);
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
    mostrarHistorial(){
        this.historial.forEach((i)=>console.log(i));
    }
    agregarEpisodio(){
        if(confirm('¿Desea agregar episodio al historial?')){
            let ID = prompt('Introduzca n.º de episodio:');
            let fecha = prompt('Introduzca fecha:');
            let Dx = prompt('Introduzca diagnóstico:')
            let Tto = prompt('Introduzca tratamiento:');
            let Doc = prompt('Introduzca responsable:')
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