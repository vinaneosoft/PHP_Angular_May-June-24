/* 1. unique collection
2. non indexed 
single values collection : not a key value collection*/

let empIds=new Set<number>();
empIds.add(456);
empIds.add(456);
empIds.add(111);
empIds.add(345);
empIds.add(456);
empIds.add(666);
empIds.add(777);
console.log(empIds);

let itr=empIds.entries();
console.log(itr);

let itr2=empIds.keys();
console.log(itr2);

let itr3=empIds.values();
console.log(itr3);