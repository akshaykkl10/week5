interface Bank {
    deposit(amount: number): void;
    getBalance(): number;
}

class BankAccount implements Bank {
    #privateField = "stings in js"
    constructor(public readonly accountNumber: string, public readonly owner: string, private balance: number){}
    protected transfer(amount:number){
        this.balance -= amount;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    getBalance(): number {
        console.log(this.#privateField)
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber: string, owner: string, balance : number){
        super(accountNumber, owner, balance)
    }
    withdraw(amount: number): void{
        this.transfer(amount)
    }
}

const account = new SavingsAccount("12abc", "Akshay", 100000)
account.deposit(12000)
console.log(account.getBalance())
account.withdraw(2000)
console.log(account.getBalance())
// console.log(account.#privateField)

