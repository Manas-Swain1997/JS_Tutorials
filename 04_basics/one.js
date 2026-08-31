// if - if condition is true it will execute the code
// if (condition){

// }
// <, >, <=, =>, ==, !=, ===, !==
const isUserLoggedIn = true
if (isUserLoggedIn){
    console.log("user has been logged in succesfully");
    
}

if (2 === "2") {
    console.log("executed");
}

if (2 == "2") {
    console.log("executed");
}

if (2 !== "2") {
    console.log("executed");
}

if (2 != "2") {
    console.log("executed");
}

const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500){
    console.log("less than");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
    
} else {console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard){
    console.log("User can buy courses");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User is logged in from email");
    
}