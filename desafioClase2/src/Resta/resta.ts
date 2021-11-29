export class Resta {

    private number1:number;
    private number2:number;
    
    constructor (n1:number, n2:number) {
        this.number1 = n1;
        this.number2 = n2;
    }


    public resultado() {
        return this.number1 - this.number2;
    }
}