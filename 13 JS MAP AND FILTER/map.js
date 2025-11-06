
let numbers = [1,2,3,4,5,6,7,8,9,10];

let result = numbers.map((num) => num *4);

console.log("result of 4 multiplication :", result);

let result2 =numbers.map((num)=>{
    return num ;
});

console.log(result2);


console.log(result2);

const teachersDetails = [
  { name: "John Smith", year: 25, city: "bhavnagar", },
  {
    name: "Emily Davis",
    year: 29,
    city: "diu",
  },
  { name: "Michael Brown", year: 67, city: "surat",  },
  { name: "Sophia Wilson", year: 22, city: "rajkot",  },
  {
    name: "David Martinez",
    year: 38,
    city: "amareli",
  },
];

let teachersname = teachersDetails.map((teacher) =>
    {return teacher.name;

    }
     );

     console.log(teachersname);

 const double =numbers.map((numbers) => {
    return numbers *2;
}
);

console.log ("double", double);

const fruits = ["apple", "banana", "cherry", "grapes"];

let fruitsresult = fruits.map((fruits)=>{

    return fruits;
});
