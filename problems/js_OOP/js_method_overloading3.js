class myClass{
   friendName(...names){
    if(names.length == 0){
        console.log(`hello Everyone!`);
    }
    else if(names.length === 1){
        console.log(`Hello ${names[0]}!`);
    }
    else if(names.length === 2){
        // console.log(`Hello ${names[0]} and ${names[1]}!`);
        console.log(`Hello ${names.join(" and ")}!`);
    }
   }
}

let obj = new myClass();
obj.friendName();
obj.friendName("Parvaz");
obj.friendName("Parvaz","Reza");