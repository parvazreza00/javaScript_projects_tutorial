//encapsulation using js ES6 class

class createCounter{
     #count = 0;

  increment(){
    this.#count++;
  }
  decrement(){
    this.#count--;
  }
  getCount(){
    return this.#count;
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
