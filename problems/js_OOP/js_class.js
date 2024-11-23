class ClassName{
    constructor(name, dob){
        this.name = name;
        this.dob = dob;
    }
    myname(){
        return `My name is ${this.name}`;
    }
    myage(x){
        // const date = new Date();
        // const myage = date.getFullYear() - this.dob;
        return ` and age is ${x - this.dob} years old.`;
    }
}
const date = new Date();
let fullyear = date.getFullYear();
let myObj = new ClassName('Parvaz', 1996);
console.log(myObj.myname() + myObj.myage(fullyear));