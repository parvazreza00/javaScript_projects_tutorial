function _greet(name){
    console.log("Hello : " + name);
}
_greet("Parvaz");

const greet = (name)=>{
    console.log("hello : "+name);
}
greet("Yeasin");

const greet1 = (name) => name;
console.log("RezaKhan");

function _add(n1, n2){
    return n1+n2;
}
console.log(_add(2,3));

const add = (n1,n2)=>{
    return n1 + n2;
}
console.log(add(3,9));

const add2 = (n1,n2) => n1 + n2;
console.log(add2(5,10));

function _sum(n){
    const summation = n.reduce(function(o,n){
        return o+n;
    });
    return summation;
}
let arr = [1,2,3,4];
console.log(_sum(arr));

const sum = (n) =>{
    return n.reduce(function(o,n){
        return o+n;
    })
}
let arr2 = [3,4,18];
console.log(sum(arr2));

const sum2 = (n) =>{
    return n.reduce((o,n)=> o+n );
}
let arr3 = [4,1,8,5];
console.log(sum2(arr3));

const sum3 = (n)=> n.reduce((o,n)=>o+n);
let arr4 = [5,9,1,30];
console.log(sum3(arr4));

function _revString(str){
    return str.split('').reverse().join('');
}
console.log(_revString("Hello World"));

const revString = (str)=>{
    return str.split('').reverse().join('');
}
console.log(revString("hello World!"));

const revString2 = (str)=> str.split('').reverse().join('');
console.log(revString2("hello World!!!"));

const myName = (name) => "Hello " + name;
console.log(myName("Parvaz"));