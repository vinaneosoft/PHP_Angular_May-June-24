var BankAccount = /** @class */ (function () {
    /*  constructor(){
         console.log("Default constrcutor");
     } */
    /*Multiple constructor implementations are not allowed. */
    function BankAccount(accNum, accountBalance, custId, accountType) {
        if (accNum === void 0) { accNum = 0; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (custId === void 0) { custId = 0; }
        if (accountType === void 0) { accountType = "savings"; }
        console.log("p - constrcutor");
        this.accountBalance = accountBalance;
        this.accountNumber = accNum;
        this.accountType = accountType;
        this.customerId = custId;
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
account1 = new BankAccount(567889, 56000, 111, "savings"); // default constr
// same statment: declare and create account
var account2 = new BankAccount(23232323, 67000, 212, "current");
var account3 = new BankAccount(78787878, 67000, 222);
var account4 = new BankAccount(56565656, 89000);
var account5 = new BankAccount(45454545);
var account6 = new BankAccount();
console.log(account2);
console.log(account4);
console.log(account5);
console.log(account6);
