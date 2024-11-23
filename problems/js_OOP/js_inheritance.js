class Father{
    num1 = 20;
    num2 = 50;

    addTowNumber(){
        const sum = this.num1 + this.num2;
        console.log(sum);
    }
}

class Son extends Father{

}

let FObj = new Father();
FObj.addTowNumber();
console.log(FObj);
// let sonObj = new Son();
// sonObj.addTowNumber();
// console.log(sonObj.addTowNumber());