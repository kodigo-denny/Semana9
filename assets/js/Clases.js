class Figura{
    lado1
    constructor(lado1){
        this.lado1 = lado1;
    }

    calcularArea(){
        return this.lado1;
    }
}

class Cuadrado extends Figura{
    constructor(lado1){
        super(lado1);
    }

    calcularArea(){
        return Math.pow(this.lado1,2);
    }
}

class Circulo extends Cuadrado{
    constructor(lado1){
        super(lado1)
    }

    calcularArea(){
        return Math.PI * super.calcularArea();
    }
}

class Rectangulo extends Figura{
    lado2
    constructor(lado1, lado2){
        super(lado1);
        this.lado2 = lado2;
    }

    calcularArea(){
        return this.lado1 * this.lado2;
    }
}

class Romboide extends Rectangulo{
    constructor(lado1, lado2){
        super(lado1, lado2)
    }
}

class Triangulo extends Rectangulo{
    constructor(lado1, lado2){
        super(lado1, lado2);
    }

    calcularArea(){
        return super.calcularArea() / 2;
    }
}

// lado1: b, lado2: h
class Trapecio extends Rectangulo{
    B
    constructor(lado1, lado2, B){
        super(lado1, lado2);
        this.B = B;
    }

    calcularArea(){
        return (this.B+this.lado1)*this.lado2 / 2;
    }
}