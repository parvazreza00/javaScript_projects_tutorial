// create object by creating object constructor

function Person(){
    this.first_name = "Tomal";
    this.last_name = "Ahmed";
    this.age = 28;
    this.city = "Dhaka";
    this.getName = ()=>{
        return `MY name is ${this.first_name} ${this.last_name}`;
    }
}

let personInstance = new Person();
console.log(personInstance.getName());



// console.log(person);
