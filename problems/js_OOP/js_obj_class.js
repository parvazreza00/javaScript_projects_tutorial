// create object by Class

class Person{
    first_name = "Parvaz";
    last_name = "Reza";
    age = 28;
    city = "DHAKA";
    getName(){
        return `MY name is ${this.first_name} ${this.last_name}`;
    }
}

let personObj = new Person();
console.log(personObj.getName());
