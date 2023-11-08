class edificio{
        constructor(calle,numero,cp){

        this.calle = calle;
        this.numero = numero;
        this.cp = cp;
        this.plantas = 0 ;
        this.puertas =  ;

        function agregarPlantasYPuertas(numPlantas, puertas){
            this.plantas = numPlantas;
            this.puertas = puertas;
        }
        function modificarNumero(numero){
            this.numero = numero;
        }
    }
}
