//encapsulation using js clousers

function createCounter(){
    let count = 0;

    return{
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    }
}

let obj = createCounter();
obj.increment()
obj.increment()
obj.increment()
obj.increment()
obj.increment()
obj.decrement()
obj.decrement()
obj.decrement()
console.log(obj.getCount());