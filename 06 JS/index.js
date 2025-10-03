// 1 arithmetic operations

let a =20;

let b = 8;


console.log("addition:",a+b);
console.log("subtriction:",a-b);
console.log("multiplecation:",a*b);
console.log("moduler:", a%b);
console.log("division:",a/b);
console.log("Exponention:" , a**b);

// 2 Assignment Operators


let x = 10;

x += 2;
console.log("x after += 2:" , x);

x*=2;
console.log ("x after *= 3: ", x );

// 3. Comparison Operators

console.log("Equal:", 5 == "5"); 
console.log("Strict Equal:", 5 === "5"); 
console.log("Not Equal:", 10 != 5); 
console.log("Greater Than:", 10 > 5); 
console.log("Less Than:", 3 < 5); 
// 4. Logical Operators

let isTrue = true;
let isFalse = false;

console.log("AND:", isTrue && isFalse); 
console.log("OR:", isTrue || isFalse); 
console.log("NOT:", !isTrue); 

// 5. Bitwise Operators

let p = 5;
let q = 3;

console.log("Bitwise AND:", p & q); 
console.log("Bitwise OR:", p | q); 
console.log("Bitwise XOR:", p ^ q); 

// 6. Unary Operators


let num = 10;
console.log("Unary Negation:", -num); 
console.log("Increment:", ++num); 
console.log("Decrement:", --num); 

// 7. Miscellaneous Operators

let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote?", canVote);

console.log("Type of 42:", typeof 42); 
console.log("Type of 'Hello':", typeof "Hello");