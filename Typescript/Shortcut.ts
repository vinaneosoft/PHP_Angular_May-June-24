// Shortcut
export class BankAccount{
    constructor(
        public accountNumber=0,
        public accountBalance=0,
        public customerId=0, 
        public accountType="savings",
    ){
        // constructor body
        console.log("p - constrcutor");
    }
    deposit(amount:number){
        this.accountBalance=this.accountBalance+amount;
        return this.accountBalance;
    }
    withdraw(amount:number){
        if(amount>=this.accountBalance)
            this.accountBalance=this.accountBalance-amount;
        else
            throw new Error("Insufficient Balance");
        return this.accountBalance;
    }
}

let account1:BankAccount; // custom type
account1=new BankAccount(567889,56000,111,"savings");// default constr
// same statment: declare and create account
let account2 = new BankAccount(23232323, 67000, 212, "current");

let account3 = new BankAccount(78787878, 67000, 222);
let account4 = new BankAccount(56565656, 89000);
let account5 = new BankAccount(45454545);
let account6 = new BankAccount();
console.log(account2);

console.log(account4);
console.log(account5);
console.log(account6);
