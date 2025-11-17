
  class ProductList {
    constructor(item, Prices, Qty){
        this.item = item;
        this.Prices = Prices;
        this.Qty = Qty;
    }
}

const  product1 = new ProductList("Fruits", 100, 5);

product1.weight =  " / 2kg /";

console.log(product1.weight);
