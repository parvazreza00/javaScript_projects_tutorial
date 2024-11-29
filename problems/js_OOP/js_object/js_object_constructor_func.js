// js object constructor function

function Person(firstName, lastName,age, eyeColor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
   
}

const info = new Person("parvaz","reza",28,"blue");

Person.prototype.nationality = "bangla";
console.log("my nationality is "+info.nationality);

// {} or new Object()
// []  or new Array()
// /()/ or new RegExp()
// () {} or new Function()

