class Item{
    descripcion
    peso
    precio
    constructor(descripcion, peso, precio){
        this.descripcion = descripcion;
        this.peso = peso;
        this.precio = precio;
    }

    getTotalWeight(){
        return this.peso;
    }
}