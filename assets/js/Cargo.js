class Cargo{
    id
    nombreCargo
    activo
    salarioHora// Objeto

    constructor(id, nombreCargo, salarioHora){
        this.id = id;
        this.nombreCargo = nombreCargo;
        this.activo = true;
        this.salarioHora = salarioHora;
    }

    setActivo(activo){
        this.activo = activo;
    }
}