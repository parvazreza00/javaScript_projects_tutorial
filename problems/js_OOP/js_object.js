// create object by object literal
const person = {
    first_name: "Yeasin",
    last_name: "Ahmed",
    age: 28,
    isBangladeshi: true,
    getName:()=>{
        return `My name is ${person.first_name} ${person.last_name}`
    }
}
// console.log(person);
console.log(person.getName());