//js encapsulation by js closure

function createCounter(){
    let count = 0;

    return {
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

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
console.log(counter.getCount());