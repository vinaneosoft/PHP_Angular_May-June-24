class Animal{
    legs:number;
    eat(){
        console.log("All Animals eat"); 
    }
}

class Tiger extends Animal{
    tigerSpecies:string[]
    eat(){
        console.log("All Tigers eat other Animals"); 
    }
}

class Sheep extends Animal{
    sheepOrigin:string
    eat(){
        console.log("All Sheep eat grass and other vegies"); 
    }
}

let animal:Animal;
animal=<Animal>new Tiger(); // upcasting
animal.eat();
animal=<Animal>new Sheep();
animal.eat();  // run time polymorphism 

console.log("----------------");
let tiger=new Tiger();
let sheep=new Sheep();
callEat(tiger)
callEat(sheep);
function callEat(obj:Animal){
    obj.eat(); // run time polymorphism
}