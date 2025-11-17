

class StudentDetails{

    constructor(name , age , subject){
        this.name =name;
        this.age = age;
        this.subject =subject;

    }
    School(){
        let SchoolName = "xyz high school";
        return SchoolName;
    }
}

const Student1 =new  StudentDetails("herry", 16, "Mathematics"); 

console.log(" hello my name is : "+Student1.name +" ;"+ " my age is: "  +Student1.age +" ;" + " i study: " + Student1.subject +" ;");