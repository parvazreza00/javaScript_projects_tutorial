class myClass{
   friendName(){
    if(arguments.length == 0){
        console.log(`hello Everyone!`);
    }
    else if(arguments.length === 1){
        console.log(`Hello ${arguments[0]}!`);
    }
    else if(arguments.length === 2){
        console.log(`Hello ${arguments[0]} and ${arguments[1]}!`);
    }
   }
}

let obj = new myClass();
obj.friendName();
obj.friendName("Parvaz");
obj.friendName("Parvaz","Reza");