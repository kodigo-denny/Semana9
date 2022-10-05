class Order{
    item// Objeto
    shipping// Objeto
    cantidad

    constructor(item, cantidad){
        this.item = item;
        this.cantidad = cantidad;
    }

    getTotal(){
        return this.cantidad * this.item.precio;
    }

    setShippingType(st){
        this.shipping = st;
    }
/*
    getShippingCost(){
        
        if(this.shipping == "air"){
            
        }
    }
*/
    
}