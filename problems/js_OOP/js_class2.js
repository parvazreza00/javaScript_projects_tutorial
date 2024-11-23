class ClassName{
    num1 = 10;
    num2 = 20;

    constructor(a, b){
        this.num1 = a;
        this.num2 = b;
    }

    addTwoNum(){
        return this.num1 + this.num2;
    }
}

let myObj = new ClassName(300,400);
console.log(myObj.addTwoNum());