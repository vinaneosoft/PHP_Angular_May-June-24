// class name : capital case 
// instance variables, instance methods : camel case
// static variables : upper case
class BankAccount{
    accountNumber:number;
    accountBalance:number;
    customerId:number;
    accountType:string;

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