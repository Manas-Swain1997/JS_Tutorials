// array

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = ["Manas", "Soumya", "Bhubaneswar", "Cuttuck", "Banglore"]

console.log(myArr[2]);
console.log(myArr2[0]);

// Array methods

myArr.push(6);
myArr.push("Manas");
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr2.unshift(9);
console.log(myArr2);

myArr2.shift();
console.log(myArr2);

console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);
console.log(myn1);

console.log('B', myArr);
console.log(myArr.splice(1, 3, 22));
console.log('c', myArr);
// console.log(myArr.splice(0, 1, 44));











