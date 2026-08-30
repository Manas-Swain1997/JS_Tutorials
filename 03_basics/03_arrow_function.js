const user = {
    username: "manas97",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username111 = "manas"
//     console.log(this.username111);
    
// }
// coffee()

// const chai = () => {
//     let username = "Manas"
//     console.log(this);
    
// }
// chai()

// Arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5, 6));

const subTwo = (num3, num4) => num3 - num4
console.log(subTwo(6, 8));

// const myObj = (num5, num6) => ({userName: "Manas"})

// const myArr = [2, 5, 3, 7, 8]
// myArr.forEach(() => ()) 

(function chai(){                        //named IIFE
    console.log('DB CONNECTED');
    
})();

(() => {
    console.log(`DB CONNECTED AGAIN`);
    
})();

((name) => {
    console.log(`Hi ${name}, welcome to GOOGLE`);
    
})("Manas")