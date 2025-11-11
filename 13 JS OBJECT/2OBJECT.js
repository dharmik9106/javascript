
class Clothes {
    constructor( color , quantity,  price , total ){
        (this.color = color ),
        (this.quantity = quantity),
        (this. price = price),
        (this.total= total);
    }
};
const ClothesDetail = new Clothes("black", 2, 5000, 10000);
console.log("ClothesDetail", ClothesDetail);
const shoppingList = {
    name:"Grossary",
    total: 5000,
    items: 10,
};
const allItems = { ...ClothesDetail, ...shoppingList};
console.log("allItem", allItems);

const allItemLength = Object.keys(allItems).Length;

console.log("length", allItemLength);
const CarDetails = {
    company: "mercedes",
    year: 2025,
    model: "g Wegon",
    get CarModel(){
        return this.model;
    },
};
const CarModel =CarDetails.CarModel;
console.log(CarModel);
const bikeDetail ={
    company:"honda",
    year: 2025,
    model: "",
    set bikeDetail(model){
    this.model =model;
    },

};
const bikeModel = (bikeDetail.bikeModel = "ninja H2");
console.log("bike detail", bikeDetail)
