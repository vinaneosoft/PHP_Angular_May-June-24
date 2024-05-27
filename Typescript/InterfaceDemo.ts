
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






interface Queue{
    insert(value:string):number; // inserting elements from back
    remove():string;   // removing elements from front
}
interface Deque extends Queue{
    insertFront(value:string):number; // inserting elements from front
    removeBack():string // removing elements from from back
}

class DequeArray implements Deque{
    insertFront(value: string): number {
        throw new Error("Method not implemented.");
    }
    removeBack(): string {
        throw new Error("Method not implemented.");
    }
    insert(value: string): number {
        throw new Error("Method not implemented.");
    }
    remove(): string {
        throw new Error("Method not implemented.");
    }

}

class QueueArray implements Queue{
    insert(value: string): number {
        throw new Error("Method not implemented.");
    }
    remove(): string {
        throw new Error("Method not implemented.");
    }
    
}

// multiple inheritance is supported via interfaces with rules
// rule: if method names are same then methods must be identical
interface A{
    test():void
}
interface B{
    test():void;
    demo():void
}
interface C extends A, B{
    implement():void
}
class XYZ implements C{
    implement(): void {
        throw new Error("Method not implemented.");
    }
    test(): number {
        throw new Error("Method not implemented.");
    }
    demo(): void {
        throw new Error("Method not implemented.");
    }
    
}


/*
one class can not extend multiple classes but
one class can implement multiple interface
one interface can extend multiple interfaces
 */
class P{

}

interface Q{

}

class R   extends P implements Q {

}

