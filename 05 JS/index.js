// data by value 

const num1 =10;

let num2 =num1;

console.log ("num1",num1);

console.log("num1", num2);

num2=20;

console.log("num1", num1);

console.log ("num2", num2);

const person ={
    name: "dharmik",
};

const person2 = person;

console.log ("person 1", person);
console.log( "person 2 ", person2 );


person2.name =" utsav";


console.log ("person1 ", person);

console.log ("person2", person2);


console.log("type of person 2" , typeof person2);

console.log ("type of null", typeof null);

const str = "hello";

console.log( typeof str);


// object , array , function.

let obj1 = {name:"dharmik"};

let obj2 = obj1 ; // reference is copied

obj2.name ="vivek";

console.log(obj1.name); //"vivek" (affected due to reference);
console.log(obj2.name); "vivek";


// type  of  1 string  example ;


let greetings = "hello dharmik ";

console.log("greetings:" + greetings);

// check type 

let greetingtype = typeof greetings;

console.log ("type of greeting: ", greetingtype);


//2. NUMBER  example//
let age =25;
console.log("age: " +age);
console.log(" type of age: ", typeof age );

//.3 Bigint Example // 

let BigNumber  = 909380486527173948n;
console.log("bignumber: " + BigNumber);
console.log("type of bignumber: " , typeof BigNumber);

// 4. Boolean example //

let isstudent =true;
console.log("isstudent: "+ isstudent);
console.log("typeof isstudent:" , typeof isstudent)




// 5. Undefined Example//
let uninitialized;
console.log("uninitialized: " + uninitialized);
console.log("Type of uninitialized:", typeof uninitialized);

// 6. Null Example//
let emptyValue = null;
console.log("emptyValue: " + emptyValue);
console.log("Type of emptyValue:", typeof emptyValue);

// 7. Symbol Example//
let uniqueID = Symbol("id");
console.log("uniqueID: " + uniqueID.toString());
console.log("Type of uniqueID:", typeof uniqueID);

// 8. Object Example//
let student = { name: "bhargav", age: 45 };
console.log("student: ", student);
console.log("Type of student:", typeof student);

// Additional Notes//

// Arrays in JavaScript are of type "object".
let numbers = [7, 2.6, 3];
console.log("numbers:", numbers);
console.log("Type of numbers:", typeof numbers); 
console.log("Type of null:", typeof null); // Outputs "object"