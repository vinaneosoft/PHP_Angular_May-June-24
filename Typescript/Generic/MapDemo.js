/*
    key-value pair collection
    unique collection (key must be unique, values can be duplicate)
    non indexed collection
 */
/* empid ==> Depatment code */
let map = new Map();
map.set(123, "LD");
map.set(111, "JS");
map.set(333, "PHP");
map.set(123, "HR");
map.set(321, "Java");
map.set(567, "LD");
map.set(567, "JS");
console.log(map);
let itr = map.entries();
console.log(itr);
