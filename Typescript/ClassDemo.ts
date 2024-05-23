// class name : capital case 
// instance variables, instance methods : camel case
// static variables : upper case
class BankAccount{
    accountNumber=0;
    accountBalance=0
    customerId=0;
    accountType="savings";

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
account1=new BankAccount();// default constr
// same statment: declare and create account
let account2 = new BankAccount();
console.log(account1.accountBalance);
console.log(account2.accountNumber);

console.log(account1);
console.log(account2);

account1.accountType="current";
console.log(account1)
console.log(account2);

account2.deposit(4500)
account1.deposit(34000);
console.log(account1)
console.log(account2);