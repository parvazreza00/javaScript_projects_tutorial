class Father{
    static greetParent(){
        console.log("Father");
    }
}

class Child extends Father{
    static greetChild(){
        console.log("Child");
    }
}

Father.greetParent();
Child.greetChild();

// console.log(Child.greetChild());

// let childObj = new Child();
// childObj.greetParent();
// childObj.greetChild();