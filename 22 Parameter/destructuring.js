const person ={
    name:"johnson",
    age: 27,
    address: "123 Main St",
    profession:"eng",
}
console.log(person)
console.log("person name " , person.name)
console.log("person age " , person.age)
console.log("person address " , person.address)
console.log("person profession " , person.profession)
const {name,age,address,profession} = person

//destructuring

const students =  ["utsav","dharmik","vaishali","brij","pratik"] 
console.log("student 1",students[0])
console.log("student 2",students[1])
console.log("student 3",students[2])
console.log("student 4",students[3])
console.log("student 5",students[4])

const [first,second,third,fourth,fifth] = students

console.log("student 1",first)
console.log("student 2",second)
console.log("student 3",third)
console.log("student 4",fourth)
console.log("student 5",fifth)
 
