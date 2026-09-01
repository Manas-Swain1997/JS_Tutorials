// for of loops
//  [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

// for in
const myObject = {
    py : "python",
    js : "JavaScript",
    rb : "Ruby",
    swift: "swift for code"
}
for (const key in myObject) {
    console.log(`${key} is shortcut of ${myObject[key]}`);
}

const programming = ["js", "rb", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);  
}

// const map2 = new Map()
// map2.set("RU", "Russia")
// map2.set("EU", "Europe")
// map2.set("APAC", "ASIA")

// for (const key in map2) {
//    console.log(key);
   
// }

