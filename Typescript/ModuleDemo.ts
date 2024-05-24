import { Department,collegeName, setCollege } from "./Modules/MyCollege";
import { Department as CompanyDepartment} from "./Modules/MyCompany";

import * as company from './Modules/MyCompany';

import Trainer from './Modules/MyCollege'; // no curly braces, u can give alias  u can use same name

let department1=new Department(123);
console.log(department1.departmentId);
department1.departmentId=777;

console.log(collegeName);
/*Cannot assign to 'collegeName' because it is an import. */
//collegeName="Lokmanya Tilak College";

setCollege("Lokmanya Tilak College");
console.log(collegeName);

let companyDepartment1=new CompanyDepartment("PHP");

let department2=new company.Department();
console.log(company.companyName);

let teacher1=new Trainer();
teacher1.tid


