// let a = 10
// const b = 20
// var c = 30

a = 300                     // global scope
if (true){
    let a = 10              // block scope
    const b = 20
    // var c = 30
    console.log("inner: ", a);
    
}

console.log("outer: ", a);
// console.log(b);
// console.log(c); 

function one(){
    const username = "Manas"
    function two(){
        const website = "youTube"
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
one()

if (true) {
    const username = "Soumya"
    if (username === "Soumya"){
        const website = " youTube"
        console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

