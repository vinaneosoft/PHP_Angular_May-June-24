export class NeoEmployee{
    employeeId=0;
    employyName="";
    basicSalary=0;
    constructor(){
        console.log("in super class constructor");
    }
// ta: 10%, da=8%, hra=15%
   getGrossSalary():number{
    return this.basicSalary+0.1*this.basicSalary+0.08*this.basicSalary+0.15*this.basicSalary
   }
}

export class NeoTrainer extends NeoEmployee{
    trainingTechnologies:string[]=[]
    extraWorkingHrs=0;
    payPerHr:number;
    /*Constructors for derived classes must contain a 'super' call. */
    constructor(){
        console.log("in sub class constructor");
        super(); // super must comes before this in constructor call
        this.payPerHr=0;
        // u can initialize rest properties here
    }

    extraPay(){
        return this.extraWorkingHrs*this.payPerHr;
    }
    // add any own method
    getGrossSalary():number{
        return this.extraPay()+super.getGrossSalary();
    }

}// subclass body ended

let employee1=new NeoEmployee();
employee1.employeeId=111;
employee1.employyName="Hari";
employee1.basicSalary=67000;
console.log(employee1);

console.log("Employee Gross Salary:"+employee1.getGrossSalary());


let trainer1=new NeoTrainer();
trainer1.employeeId=222;
trainer1.employyName="Poonam";
trainer1.basicSalary=67000;
trainer1.trainingTechnologies=["Java","We Basics","Angular","React"];
trainer1.extraWorkingHrs=15;
trainer1.payPerHr=1000;
console.log(trainer1);
console.log("Trainer extra Pay:"+trainer1.extraPay());
console.log("Trainer Gross Salary:"+trainer1.getGrossSalary()); // calling inheried overriden method
