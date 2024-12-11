const person = {
    firstName:"parvaz",
    lastName:"reza",
    age: 28,
    country:"Bangladesh",
}

const {firstName:first_name, lastName:last_name, age:my_age, country:city,birth="29 march"} = person;
console.log(birth);

const myarr = [1,2,3,4];
const [a,,c,d] = myarr;
console.log(c);

function displayUser({ name, age }){
    console.log(`${name} and ${age}`);
}
const user = {name:"parvaz",age:23};
displayUser(user);


const person2 = {
   
    country:"Bangladesh",
    address:{
        presentAddr: "Dhaka",
        permanentAddr:"Bhola",
    }
}

const myaddr = {counter,address: {presentAddr,permanentAddr}} = person2;
console.log(permanentAddr);

const myarray = [1,3,4,5,6];
const [...rest] = myarray;
console.log(rest);

const person3 = {
    firstName:"parvaz",
    lastName:"reza",
    age: 28,
    country:"Bangladesh",
}

const {firstName, age, ...bio} = person3;
console.log(bio); 
