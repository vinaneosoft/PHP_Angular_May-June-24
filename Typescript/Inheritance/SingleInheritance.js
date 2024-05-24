var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NeoEmployee = /** @class */ (function () {
    function NeoEmployee() {
        this.employeeId = 0;
        this.employyName = "";
        this.basicSalary = 0;
    }
    // ta: 10%, da=8%, hra=15%
    NeoEmployee.prototype.getGrossSalary = function () {
        return this.basicSalary + 0.1 * this.basicSalary + 0.08 * this.basicSalary + 0.15 * this.basicSalary;
    };
    return NeoEmployee;
}());
var NeoTrainer = /** @class */ (function (_super) {
    __extends(NeoTrainer, _super);
    function NeoTrainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.trainingTechnologies = [];
        return _this;
    }
    return NeoTrainer;
}(NeoEmployee)); // subclass body ended
var employee1 = new NeoEmployee();
employee1.employeeId = 111;
employee1.employyName = "Hari";
employee1.basicSalary = 67000;
console.log(employee1);
console.log("Employee Gross Salary:" + employee1.getGrossSalary());
var trainer1 = new NeoTrainer();
trainer1.employeeId = 222;
trainer1.employyName = "Poonam";
trainer1.basicSalary = 67000;
trainer1.trainingTechnologies = ["Java", "We Basics", "Angular", "React"];
console.log(trainer1);
console.log("Trainer Gross Salary:" + trainer1.getGrossSalary());
