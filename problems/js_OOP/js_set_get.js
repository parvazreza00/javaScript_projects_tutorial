class Product{

    set setPrice(value){
        this.price = value;
    }

    get getPrice(){
        return this.price;
    }
}

let productObj = new Product();
productObj.setPrice = 200;
console.log(productObj.getPrice);