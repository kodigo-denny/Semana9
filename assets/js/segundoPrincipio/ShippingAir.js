class ShippingAir extends Shipping{
    constructor(){
        super("Air");
    }

    getShippingCost(total, peso){
        if(total >= 20){
            return peso * 3;
        }

        return false;
    }

    getShippingDate(){
        console.log("Se tarda 5 dias habiles")
    }
}