let age = "50"

console.log(typeof age);
console.log(typeof(age));

let valueInNumber = Number(age) // change the type of age from string to number
console.log(typeof valueInNumber);

// "50" => 50
//NaN => not a number => 123abc
//conversion of null => 0
//conversion of undefined => NaN
//conversion of boolean // true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "binda" => true

let a = 33
let astring = String(a)
console.log(astring);
console.log(typeof astring);