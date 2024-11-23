class Father{
    constructor(){
        console.log("Father");
    }   
}

class Son extends Father{
    constructor(sms){
        super();
        console.log(sms);
    }
}


new Son("Son");
// new Son();

