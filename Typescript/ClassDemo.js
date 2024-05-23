// class name : capital case 
// instance variables, instance methods : camel case
// static variables : upper case
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountNumber = 0;
        this.accountBalance = 0;
        this.customerId = 0;
        this.accountType = "savings";
    }
    BankAccount.prototype.deposit = function (amount) {
        this.accountBalance = this.accountBalance + amount;
        return this.accountBalance;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount >= this.accountBalance)
            this.accountBalance = this.accountBalance - amount;
        else
            throw new Error("Insufficient Balance");
        return this.accountBalance;
    };
    return BankAccount;
}());
var account1; // custom type
account1 = new BankAccount(); // default constr
// same statment: declare and create account
var account2 = new BankAccount();
console.log(account1.accountBalance);
console.log(account2.accountNumber);
console.log(account1);
console.log(account2);
account1.accountType = "current";
console.log(account1);
console.log(account2);
account2.deposit(4500);
account1.deposit(34000);
console.log(account1);
console.log(account2);
