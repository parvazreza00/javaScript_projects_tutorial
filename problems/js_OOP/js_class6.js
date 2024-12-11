class Car {
    constructor(name){
        this.name = name;
    }

    static carName = () =>{
        return `I have a car.`;
    }
}

class childCar extends Car {

}

const carObj = new Car("Masda");
// console.log(carObj.carName());
// console.log(Car.carName("Mazda"));
console.log(childCar.carName());