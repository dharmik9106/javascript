class Bank {
    #pin;
    #accountNumber;
    #balance;

    constructor(pin, accountNumber, balance) {
        this.#pin = pin;
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(newBalance) {
        this.#balance = newBalance;
    }

    getDetails() {
        return `Pin: ${this.#pin}, Account Number: ${this.#accountNumber}, Balance: ${this.#balance}`;
    }
}

const bankDetail = new Bank(1232, 213145465, 30000);
const abc = new Bank(5678, 987654321, 15000);

console.log("SBI", abc.getDetails());
console.log("ABC Balance:", abc.getBalance());

bankDetail.setBalance(23000);
console.log("Updated  Balance:", bankDetail.getBalance());
