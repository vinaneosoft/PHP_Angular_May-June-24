
export class BankAccount{
    static counter:number;
    static{
        BankAccount.counter=0;
        console.log("in static block1");
    }
    static{
        console.log("in static block2");
    }
    constructor(
        public accountNumber=0,
        public accountBalance=0,
        public customerId=0, 
        public accountType="savings",
    ){
        // constructor body
        console.log("p - constrcutor");
        BankAccount.counter++; // single copy so in every constructor call, increment in single same copy
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
console.log(BankAccount.counter);
let account1:BankAccount; // custom type
account1=new BankAccount(567889,56000,111,"savings");// default constr
let account2 = new BankAccount(23232323, 67000, 212, "current");
let account3 = new BankAccount(78787878, 67000, 222);
console.log(BankAccount.counter);
let account4 = new BankAccount(56565656, 89000);
let account5 = new BankAccount(45454545);
let account6 = new BankAccount();
console.log(BankAccount.counter);
console.log(account2);
console.log(account4);
console.log(account5);
console.log(account6);
