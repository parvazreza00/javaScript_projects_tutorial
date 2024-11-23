class Father{
    

    addTwoNumber(){
        let num1 = 20;
        let num2 = 30;
        console.log(num1 + num2);
    }
}

class Son extends Father{
  

    addTwoNumber(){
        let num1 = 200;
        let num2 = 300;
        console.log(num1 + num2);
    }
}

// let sonObj = new Son()
let FObj = new Father()
FObj.addTwoNumber();