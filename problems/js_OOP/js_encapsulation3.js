//encapsulation using js ES6 constructor function

function  createCounter(){
  let count = 0;
  this.increment = ()=>{
    count++;
  }
  this.decrement = ()=>{
    count--;
  }
  this.getCount = function(){
    return count;
  }
}

let obj = new createCounter();
obj.increment()
obj.increment()
obj.increment()
obj.increment()
obj.increment()
obj.decrement()
obj.decrement()
console.log(obj.getCount());
