class BankAccount {
    accountNumber;
    owner;
    balance;
    #privateField = "stings in js";
    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }
    transfer(amount) {
        this.balance -= amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        console.log(this.#privateField);
        return this.balance;
    }
}
class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, balance) {
        super(accountNumber, owner, balance);
    }
    withdraw(amount) {
        this.transfer(amount);
    }
}
const account = new SavingsAccount("12abc", "Akshay", 100000);
account.deposit(12000);
console.log(account.getBalance());
account.withdraw(2000);
console.log(account.getBalance());
export {};
// console.log(account.#privateField)
//# sourceMappingURL=task1.js.map