// let score = 33;
let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);

let age = "29abc";

let valueInAge = Number(age);
console.log(typeof valueInAge);
console.log(valueInAge);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => true
// "Manas" => true

let someNumber = 22;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof (stringNumber));

