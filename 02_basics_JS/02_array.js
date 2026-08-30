const marvel_heros = ["IronMan", "CaptainAmerica", "Thor", "SpiderMan"]
const dc_heros = ["SuperMan", "BatMan", "Flash", "WonderWoman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[4][1]);

// Concad
const americanCities = ["NewYork", "Boston", "Chicago", "NewJersey"]
const indianCities = ["Delhi", "Mumbai", "Banglore", "Bhubaneswar"]
const allCities = americanCities.concat(indianCities);
console.log(allCities);

// sprade
const bhubaneswar = ["Baramunda", "Nayapalli", "Delta"]
const bangalore = ["Marathahalli", "Kadubishnahalli", "Kundanahahalli"]
const allLocalAreas = [...bhubaneswar, ...bangalore]
console.log(allLocalAreas);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7, [5, 6]]]
const realArrey = anotherArray.flat(Infinity)
console.log(realArrey);

console.log(Array.isArray("Manas"));
console.log(Array.from("Manas"));
console.log(Array.from({name: "Manas"})) // empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




