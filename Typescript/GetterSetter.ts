// getterSetter
export class BankAccount{
    constructor(
        private accountNumber=0,
        private accountBalance=0,
        private customerId=0, 
        private accountType="savings",
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
    get accBalance(){
        return this.accountBalance;
    }
    set accBalance(accountBalance:number){
        this.accountBalance=accountBalance;
    }
    /* create remaining getters setters */

}// class body ends

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
//Property 'accountBalance' is private and only accessible within class 'BankAccount'
account1.accBalance=67000;
//This expression is not callable because it is a 'get' accessor.
console.log(account1.accBalance);
// access other getters setters here