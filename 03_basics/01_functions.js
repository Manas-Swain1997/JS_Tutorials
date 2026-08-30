function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(55, 66)

function subTwoNumbers(num3, num4){
    let result = num3 - num4
    return result
}
subTwoNumbers(45454, 636346)// it will never print as we have returned the value but not tell to print it so the value will store in return
console.log(subTwoNumbers(636346, 4556));

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Manas"))

function loginUserMessage(username){
    if(username === undefined){                 //if(!username)
        console.log("Please enter a userName");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Manas"))
console.log(loginUserMessage());

function loginUserMessage2(username2 = "TOM"){
    if(!username2){                 //if(!username)
        console.log("Please enter a userName");
        return
    }
    return `${username2} just logged in`
}

console.log(loginUserMessage2());


// function calculateCartPrice(num01){
//     return num01
// }

// console.log(calculateCartPrice(200, 400, 500));

function calculateCartPrice(...num01){
    return num01
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    userName3: "Manas",
    age2: 28
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName3} and age is ${anyObject.age2}`);
    
}
handleObject(user)
handleObject({
    userName3: "Sam",
    age2: 29
})

const myNewArray = [44, 454, 343, 566]
function returnSecondValue(getArray){
    return getArray[3]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 400, 590, 39000]));

