
let number = [10,20,30,40,50];

let sum = 0;

for   (let i=0; i<number.length; i++){
    sum += number[i];

}

console.log("the sum is :",sum);

//reduce
const total = number.reduce((acc, curr)=> {acc + curr;

    return acc;

}, 0);

console .log("total using reduce is :", total);

//higher marks 

let studentMarks = [50,60,70,80,90];

let max =0;

for (let i = 0; i < studentMarks.length; i++) {
  if (studentMarks[i] > max) {
    max = studentMarks[i];
  }
}

console.log("higher marks", max);

// now using reduce method


let higherMarks= studentMarks.reduce((max, curr) => {
    if (curr> max){
        acc = curr;

    }
    return acc;


});


console.log ("higher Marks", higherMarks)


const restaurantOrder = [
  {
    item: "Pizza",
    price: 250,
    quantity: 2
  },
  {
    item: "Burger",
    price: 120,
    quantity: 3
  },
  {
    item: "Pasta",
    price: 180,
    quantity: 1
  },
  {
    item: "Fries",
    price: 80,
    quantity: 2
  },
  {
    item: "Cold Drink",
    price: 60,
    quantity: 4
  }
];

// Total Restaurant Bill
let totalRestaurantBill = restaurantOrder.reduce((acc, curr) => {
  acc += curr.price * curr.quantity;
  return acc;
}, 0);

console.log("Restaurant Bill:", totalRestaurantBill);
