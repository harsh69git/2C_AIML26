class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }

    static compareProducts(p1, p2) {
        if (p1.price > p2.price)
            console.log(p1.name + " has higher price");
        else
            console.log(p2.name + " has higher price");
    }
    display(){
        console.log(this.id,this.name,this.price)
    }
}

class Electronics extends Product{
    constructor(id,name,price,warranty){
        super(id,name,price);
        this.warranty=warranty;
    }
    display() {
        console.log(this.id, this.name, this.price, this.warranty);
    }
}

let p1 = new Product(1, "Shirt", 1000);
let p2 = new Product(2, "Shoes", 2000);
let p3 = new Electronics(3, "Laptop", 50000, "2 Years");

console.log(p1.getDiscountedPrice(10));

Product.compareProducts(p1, p2);

p1.display();
p3.display();