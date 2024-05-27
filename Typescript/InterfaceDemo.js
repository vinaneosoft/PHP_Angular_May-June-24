var NeoTrainer = /** @class */ (function () {
    function NeoTrainer() {
        this.basicSalary = 0;
        this.traingTech = [];
    }
    NeoTrainer.prototype.getGrossSalary = function () {
        return this.basicSalary + 0.1 * this.basicSalary;
    };
    return NeoTrainer;
}());
var NeoDeveloper = /** @class */ (function () {
    function NeoDeveloper() {
        this.basicSalary = 0;
        this.developmentexp = 0;
    }
    NeoDeveloper.prototype.getGrossSalary = function () {
        ;
        return this.basicSalary + 0.2 * this.basicSalary; // own implemntation
    };
    return NeoDeveloper;
}());
var employee; // upcasting via interfaces
employee = new NeoDeveloper();
employee.basicSalary = 56000;
console.log(employee.getGrossSalary());
employee = new NeoTrainer();
employee.basicSalary = 56000;
console.log(employee.getGrossSalary());

