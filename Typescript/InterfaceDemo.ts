
interface Employee{
    // skeleton of variables
    basicSalary:number;
    getGrossSalary():number; // only method signature
}

class NeoTrainer implements Employee{
    basicSalary=0;
    traingTech=[];
    getGrossSalary():number{
        return this.basicSalary+0.1*this.basicSalary;
    }
}

class NeoDeveloper implements Employee{
    basicSalary=0;
    developmentexp=0;
    getGrossSalary():number{;
        return this.basicSalary+0.2*this.basicSalary; // own implemntation
    }
}

let employee:Employee; // upcasting via interfaces

employee=new NeoDeveloper();
employee.basicSalary=56000;
console.log(employee.getGrossSalary());


employee=new NeoTrainer();
employee.basicSalary=56000;
console.log(employee.getGrossSalary());