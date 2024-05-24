
// module name : MyCollege
export class Department{
    // properties
    // methods
    constructor(public departmentId=0){

    }
}

export let collegeName="LT College";

export function setCollege(colName:string){
    collegeName=colName;
}

export default class Teacher{
    tid:number;
}
//A module cannot have multiple default exports.
/* export default class Student{
} */

