/* typescript is compiled lang, Javascript  directly interpreted
 * js : faster, ts : slower
 * ts : compilation : error free code goes for execution
 *  js: interpreted : may be lot of errors we will come to know directly at execution
 * 
 * Ts : strictly typed lang / statically typed lang
 * js : dynamically typed lang / loose typed lang
 */

let empId:number; // string, boolean // custom data types  type annotations

empId=6789;
//empId="xyz";
//empId=true;

let empSalary:any;
empSalary=45000;
empSalary="forty thousand"

let count = 10; //number
//count=true;

let companyName;
console.log(typeof companyName);

 companyName="Neosoft";
 console.log(typeof companyName);
// return type annotations to a function
 function add(...nums:number[]){
    return nums.reduce((acc,num)=>acc+num); // js built in function
  // return "";
   //return true;
 }
 function add2(...nums:number[]):number{
    return nums.reduce((acc,num)=>acc+num);
    //return ""
 }
 function add3(...nums:number[]):void{
    //return nums.reduce((acc,num)=>acc+num);
    //return ""
    console.log(nums.reduce((acc,num)=>acc+num))
 }

 let s="Neosoft";
 //s is string
 let s2;
 // s2 is any
 s2="Neosoft";
// type assertion 
let s3=<string>s2
console.log( s3.toLowerCase());
console.log((<string>s2).toUpperCase());


