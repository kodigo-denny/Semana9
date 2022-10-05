class Empleado{
    nombre
    apellido
    cargo // Objeto
    horasTrabajo // Objeto
   
    constructor(nombre, apellido, cargo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.horasTrabajo = new HorasTrabajo();
        this.horasTrabajo.setHoras(0);
    }

    getNombre(){
        return this.nombre + " " + this.apellido;
    }

    getApellidoNombre(){
        return this.apellido + ", " + this.nombre;
    }
    

    
    
}