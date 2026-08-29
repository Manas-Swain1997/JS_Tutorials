
const score = 400;

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));

const otherNumber2 = 123.8994;
console.log(otherNumber2.toPrecision(4));

const hundreds = 100000000000;
console.log(hundreds.toLocaleString('en-IN'));

//============================================================Maths===========================================================

console.log(Math);
console.log(Math.abs(-4)); // -ve to +ve only
console.log(Math.round(4.6));
console.log(Math.ceil(5.5));
console.log(Math.floor(5.5));
console.log(Math.min(2, 3, 6, 7, 111));
console.log(Math.max(2, 3, 6, 7, 111));
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);












