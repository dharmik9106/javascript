

class employee{

    constructor(name, age ,sallary, pf){
        this.name =name ;
        this.age = age;
        this.sallary = sallary;
        this.pf =pf;


    }

    get import(){
        return this.pf ;
    }
}

const employee1 =  new employee("John", 30, 50000, 5000);

console.log(employee1.import);
console.log(employee1);