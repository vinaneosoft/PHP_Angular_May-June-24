"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountBalance, customerId, accountType) {
        if (accountNumber === void 0) { accountNumber = 0; }
        if (accountBalance === void 0) { accountBalance = 0; }
        if (customerId === void 0) { customerId = 0; }
        if (accountType === void 0) { accountType = "savings"; }
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
        this.customerId = customerId;
        this.accountType = accountType;
        // constructor body
        console.log("p - constrcutor");
        BankAccount.counter++; // single copy so in every constructor call, increment in single same copy
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
exports.BankAccount = BankAccount;
(function () {
    BankAccount.counter = 0;
    console.log("in static block1");
})();
(function () {
    console.log("in static block2");
})();
console.log(BankAccount.counter);
var account1; // custom type
account1 = new BankAccount(567889, 56000, 111, "savings"); // default constr
var account2 = new BankAccount(23232323, 67000, 212, "current");
var account3 = new BankAccount(78787878, 67000, 222);
console.log(BankAccount.counter);
var account4 = new BankAccount(56565656, 89000);
var account5 = new BankAccount(45454545);
var account6 = new BankAccount();
console.log(BankAccount.counter);
console.log(account2);
console.log(account4);
console.log(account5);
console.log(account6);
