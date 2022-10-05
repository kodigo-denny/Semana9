class SalarioHora{
    id
    salarioHora
    constructor(id, salarioHora){
        this.id = id;
        this.salarioHora = salarioHora;
    }

    setSalarioHora(salarioHora){
        if(salarioHora>0)
            this.salarioHora = salarioHora;
    }

    getSalarioHora(){
        return this.salarioHora;
    }
}