let name = "Parvaz Reza";
console.log(name);
name = "tomal";
console.log(name);

const person = {};
person.fname = "TOmal";
person.lname = "Hasan";
console.log(person);

const revString = (str)=> {
    return str.split('').reverse().join('');
}
console.log(revString("hello world"));