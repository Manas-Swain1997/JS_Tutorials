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
