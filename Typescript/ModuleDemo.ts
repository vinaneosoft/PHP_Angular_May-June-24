import { Department,collegeName, setCollege } from "./Modules/MyCollege";


let department1=new Department(123);
console.log(department1.departmentId);
department1.departmentId=777;

console.log(collegeName);
/*Cannot assign to 'collegeName' because it is an import. */
//collegeName="Lokmanya Tilak College";

setCollege("Lokmanya Tilak College");
console.log(collegeName);