class Person{
    static first_name = "Reza";
    static last_name = "Khan";

    static fullName(){
        return `${this.first_name} ${this.last_name}`;
    }
}

// let personObj = new Person();
console.log(Person.fullName());