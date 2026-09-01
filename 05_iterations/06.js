// Map
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 10)

const newNums = myNumbers.map((num) => num * 10)
                          .map((num) => num + 1)
                          .filter((num) => num >= 40)
console.log(newNums);

// reduce method

const myNums2 = [1, 3, 4, 5]

// const myTotal = myNums2.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums2.reduce((acc, curr) => acc + curr, 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 2999
    },
    {
        itemName: "PY course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
]

const myTotal2 = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

console.log(myTotal2);
