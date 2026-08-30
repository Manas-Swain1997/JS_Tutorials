// singleton
// Object.create

// object literals

let mySym = Symbol("key1")
const JSuser = {
    name: "Manas", 
    [mySym]: "myKey",
    age: 28,
    location: "Banglore",
    email: "mswain896@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Tuesday", "Friday"]
}

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser[mySym]);

JSuser.email = "manas@cht.com"
console.log(JSuser);

// Object.freeze(JSuser)
// JSuser.email = "manas@google.com"
// console.log(JSuser);

 JSuser.greetings = function(){
    console.log("Hello JSUser");
}

JSuser.greetingsTwo = function(){
    console.log(`hello JSUser: ${this.name}`);
    
}
console.log(JSuser.greetings());
console.log(JSuser.greetingsTwo());



