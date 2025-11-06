let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

let evenNumber = number.filter((num) => num % 2 === 0);

console.log("even numbers", evenNumber);

const hotelDetails = [
  { name: "Dwarkadhish", year: 45, city: "dwarka", },
  {
    name: "Bkyvision",
    year: 45,
    city: "Bhavnagar",
  },
  { name: "Gajanand", year: 67, city: "bhuj",},
  { name: "Shriji", year: 22, city: "surat", },
  {
    name: "NandRani",
    year: 38,
    city: "rajkot",
    
  },
];

let hotelYear = hotelDetails.filter((hotel) => hotel.year > 20);

console.log("hotel year > 30", hotelYear);

let hotelName = hotelYear.map((hotel) => hotel.name);

console.log("hotel names",hotelName);

let hotelCity = hotelYear.map((hotel) => hotel.city);

console.log("hotel city",hotelCity);