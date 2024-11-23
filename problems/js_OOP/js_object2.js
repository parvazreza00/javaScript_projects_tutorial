// create object by creating object instance

let person = Object();

person.first_name = "Parvaz";
person.last_name = "Reza";
person.age = 28;
person.isBangladeshi = true;
person.getName = ()=>{
    return `My name is ${person.first_name} ${person.last_name}`;
}

// console.log(person);
console.log(person.age);