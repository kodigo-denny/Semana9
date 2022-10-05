class HorasTrabajo{
    horas

    constructor(horas){
        this.horas = horas;
    }

    setHoras(horas){
        if(horas >= 0)
            this.horas = horas;
    }

    getHoras(){
        return this.horas;
    }
}