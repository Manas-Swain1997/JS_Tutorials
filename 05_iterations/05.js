const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
})

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 5)
console.log(newNums);

myNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNo = myNo.filter( (num) => {
    return num > 4
})
console.log(newNo);


const newNums2 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
})

console.log(newNums2);

const books = [
    {
        title: "Book One", genre: "Fiction", publish: 1981, edition: 2004
    },
    {
        title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008
    },
    {
        title: "Book Three", genre: "History", publish: 1999, edition: 2007
    },
    {
        title: "Book Four", genre: "Non-Fiction", publish: 1984, edition: 2000
    },
    {
        title: "Book Five", genre: "Science", publish: 1988, edition: 2009
    },
    {
        title: "Book Six", genre: "Non-Fiction", publish: 1975, edition: 2000
    },
    {
        title: "Book Seven", genre: "History", publish: 1999, edition: 2009
    },
    {
        title: "Book Eight", genre: "Non-Fiction", publish: 1991, edition: 2001
    },
    {
        title: "Book Nine", genre: "Polity", publish: 1991, edition: 2009
    },

];

// const userBooks =  books.filter( (bk) => bk.genre === "History")
// let userBooks = books.filter( (bk) => {
//     return bk.publish >= 1990
// })
let userBooks = books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === "History"
})

console.log(userBooks);
