class Animal {
    constructor(name){
        this.name = name;
    }
     speak(){
        return `${this.name} make a noise`;
     }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed
    }

    speak(){
        return `${super.speak()} ${this.breed} dog.`;
    }
}

const dogObj = new Dog("Buddy","Golden Retriever");
console.log(dogObj.speak());