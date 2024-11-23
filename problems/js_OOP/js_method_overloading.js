class myClass{
    myfunction(p1,p2,p3){
        if(arguments.length === 1){
            console.log("it has one argument", p1);
        }
        else if(arguments.length === 2){
            console.log("there have 2 arguments", p1,p2);
        }
        else if(arguments.length === 3){
            console.log("there have 3 arguments:", p1,p2,p3);
        }
    }
}

let obj = new myClass();
obj.myfunction(1);
obj.myfunction(1,2);
obj.myfunction(1,2,3);