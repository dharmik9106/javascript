
class Bank {

    constructor(name , acc, ifsc){
        this.name =name;
        this.acc = acc;
        this.ifsc = ifsc;
    }
    static getBankName(name){
        return name;
    }
}

const Bank1 = new Bank(1234, "uto", "an12");

console.log(Bank.getBankName("sbi"));