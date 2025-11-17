

class Car {

    constructor (company, model, year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
    calculateYear(age) {
    return this.year - age;
  }
}

const Car1 = new Car("porsche", 911, 2025);

console.log(
  "i have" +
    " " +
    Car1.company +
    " " +
    Car1.model +
    " " +
    "car" +
    " " +
    "which is" +
    " " +
    Car1.calculateYear(2023) +
    " " +
    "years old" 
);