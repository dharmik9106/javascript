

let text = "abcdefg";

console.log("type , typeof text");

//charAt example

console.log("char at", text.charAt(3));


//concat example

console.log(text.concat("ijklmno"));


//endsWith example

console.log("endsWith example:", text.endsWith("g"));
console.log("endsWith example:", text.endsWith("a"));

//includes example

console.log ("include example: ", text.includes("k"));

//indexOf example

text ="abcdabdc";


console.log("index of:", text.indexOf("b"));

console.log("index of not available:",text.indexOf ("x"));

//lastIndexOf example 

 console.log("last index:", text.lastIndexOf("a"));
 console.log("last index:", text.lastIndexOf("k"));

 console.log("text-length:", text.length);