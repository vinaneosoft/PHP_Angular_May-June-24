import { NeoEmployee, NeoTrainer } from "./SingleInheritance";

class A{
     test():NeoEmployee{
        console.log("test method");
        return new NeoEmployee();
    }
}

class B extends A{
    demo(){
        this.test(); // super class? current method? : overrding method
        // call super class method ?
        super.test();
    }
     test():NeoTrainer{
        console.log("override in B"); 
        return new NeoTrainer();
    }
}
// same scope , increased scope allowed, but decreased scope not allowed
// if primitive return type : must be same
// if void : we can change a return type in sub class ov. method
// covariant return types allowed