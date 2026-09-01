const userEmail = "ms@google.com"

if (userEmail){
    console.log("Got User email");
} else {
    console.log("Don't have user email");
}

const emptyArray = []
if (emptyArray.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Falsy values
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function (){}, 

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");


