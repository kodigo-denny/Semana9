class ShippingGround extends Shipping{
    constructor(){
        super("Ground");
    }

    getShippingCost(total, peso){
        if(total > 100){
            return 0;
        }

        if(total >= 10){
            return peso * 1.5
        }
        return false;
    }

    getShippingDate(){
        console.log("Se tarda 15 dias habiles")
    }
}