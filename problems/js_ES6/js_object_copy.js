const person = {
    name:"parvaz",
    job:"Developer"
}

const otherObj = Object.assign({}, person);
otherObj.name = "hasan";
console.log(otherObj);
console.log(person);