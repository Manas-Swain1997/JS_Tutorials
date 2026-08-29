// Premitive data types = 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

// JS : Dynamic Programming Language 

const score = 1000
const scoreValue = 1000.03

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anoterId = Symbol('123')

console.log(id === anoterId);

const bigNumber = 355353533345666n


// Reference Type (Non-Primitive) : Array, Objects, Functions

const heros = ["IronMan", "CaptainAmerica", "BlackPanther", "Thor", "Hulk", "DoctorStrange", "SpiderMan"]
let myObj = {
    name: "Manas",
    age: 29
}

const myFunction = function(){
    console.log("hello World");
    
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);
console.log(typeof id);
console.log(typeof outsideTemp);



// =======================================================
// Stack memory(Primitive), Heap memory(Non-Primitive)

let myYoutubename = "MSVlogs";
let anotherName = myYoutubename;
anotherName = "MSGVlogs";

console.log(myYoutubename);
console.log(anotherName);

let user = {
    email: "babul896896@gmail.com",
    upi: "user@ybl"
}

let userTwo = user;
userTwo.email = "user@google.com";

console.log(user.email);
console.log(userTwo.email);







