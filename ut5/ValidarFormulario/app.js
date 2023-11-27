const nombre = document.getElementById("Nombre");
const apellidos = document.getElementById("Apellidos");
const email = document.getElementById("Email");
const form = document.getElementById("Formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit",e=>{
    e.preventDefault();
    if(nombre.value.length <6){
        
        alert("Nombre muy corto");
    }
}
)
