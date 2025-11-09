
const  studentDetails = {

    Name :"Dharmik",
    age : 20,
    id : 9772,
    Number: 9227101532,

}

console.log(typeof studentDetails);

console.log(studentDetails.Number);

console.log (studentDetails);


const Measurement = new Object();

Measurement.length =300;

Measurement.width =200;
Measurement.height =200;

console.log(Measurement);

console.log(studentDetails ["id"]);

studentDetails.age ="20";

studentDetails.department = "it";

console.log(studentDetails);

const {id} = studentDetails;
console.log(id);

const { Name: Names } = studentDetails;
console.log(Name);

function details(id, Name, age, course){
    (this.id = id),(this.Name=Name), (this.age=age), (this.course = coure);

}
const student =new details(
    9829,
    "vivek",
    19,
    "full-stack development",

);

console.log(student);

const student2 = new details(8558, "utsav", 19, "frontend development");
console.log(student2.course);

details.prototype.email = "vaishali94@gmail.com";

console.log(student.Name)