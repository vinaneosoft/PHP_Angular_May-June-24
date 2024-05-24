"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyCollege_1 = require("./Modules/MyCollege");
var department1 = new MyCollege_1.Department(123);
console.log(department1.departmentId);
department1.departmentId = 777;
console.log(MyCollege_1.collegeName);
/*Cannot assign to 'collegeName' because it is an import. */
//collegeName="Lokmanya Tilak College";
(0, MyCollege_1.setCollege)("Lokmanya Tilak College");
console.log(MyCollege_1.collegeName);
