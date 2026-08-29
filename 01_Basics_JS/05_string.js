const name = "Manas";
const repoCount = 1;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('ManasGT');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("s"));

let gameName2 = "Manas-GT";
const newString = gameName2.substring(0, 4);
console.log(newString);

const anotherString = gameName2.slice(-8, 2);
console.log(anotherString);

const newStringOne = "   Manas   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://manas.com/manas%20Swain"
console.log(url.replace('%20', '-'));
console.log(url.includes('manas'));
console.log(gameName2.split('-'));





