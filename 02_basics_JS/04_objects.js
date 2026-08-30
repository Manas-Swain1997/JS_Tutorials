// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "manas_user"
tinderUser.name = "Manas Swain"
tinderUser.isLoggedIn = false
tinderUser.age = 28

console.log(tinderUser);

const regularUser = {
    email: "hi@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Manas",
            lastname: "Swain"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname);
console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {3: "c", 4: "d"}
const obj3 = {obj1, obj2}
const obj4 = Object.assign(obj1, obj2)
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj4);
console.log(obj5);

const dbUsers = [
    {
        userId: 99485,
        name: "Soumya Swain",
        email: "s@gmail.com"
    },
     {
        userId: 34563,
        name: "Manas Swain",
        email: "m@gmail.com"
    },
     {
        userId: 26255,
        name: "Pooja Swain",
        email: "p@gmail.com"
    }
]

console.log(dbUsers[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// destructure
const course = {
    courseName: "JS",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);



