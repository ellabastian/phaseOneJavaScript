const Candy = require("./candy"); 

class ShoppingBasket {
    constructor() {
        this.list_of_items = [];
        // this.discount = 0;
    }

    getTotalPrice() {
        let sum = 0
        this.list_of_items.forEach((item) => {sum += item.price;})
        return sum;
    }

    // applyDiscount(discount) {
    //     discount = this.discount;
    //   }

    // getTotalPrice() {
    //     let totalPrice = 0;
    //     this.list_of_items.forEach((item) => {
    //       totalPrice += item.getPrice();
    //     });
    
    //     return totalPrice - this.discount;
    //   }

    addItem(candy) {
        this.list_of_items = this.list_of_items.concat(candy)
        return this.list_of_items
    }

}

// const ShoppingBasket = require("./basket.js");
const candy = new Candy('Mars', 4.99);
const candy1 = new Candy('Skittles', 2.99);
const basket = new ShoppingBasket();
// console.log(basket.getTotalPrice());
basket.addItem(candy);
basket.addItem(candy1);
// console.log(basket.getTotalPrice());

// console.log(basket.getTotalPrice());
// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));
// console.log(basket.getTotalPrice());

module.exports = ShoppingBasket;
