class Empleado{
    nombre
    apellido
    horas
    salarioHora
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombre(){
        return this.nombre + " " + this.apellido;
    }

    getApellidoNombre(){
        return this.apellido + ", " + this.nombre;
    }

    setHoras(horas){
        if(horas > 0)
        this.horas = horas;
    }

    setSalarioHora(salarioHora){
        if(salarioHora>0)
            this.salarioHora = salarioHora;
    }

    imprimirReporteHorasTrabajadas(){
        return this.horas * this.salarioHora;
    }
}