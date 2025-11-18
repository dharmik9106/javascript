

class  Employee {
    constructor(name, position, salary){
        this.name=name;
        this.department= position;
        this.salary=salary;

    }
    set employeesalary(salary){
        return (this.salary = salary);
    }
}
const emp1 =new Employee ("jack", "developer",);

emp1.employeesalary= 5000;  

console.log("emp1 detail", emp1);
