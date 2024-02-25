// function User(name, email) {
//     this.name = name;
//     this.isAdmin = false;
//     this.email = email;
// }
// const person = new User("Fedya", "aaa@aaa.ru");
// console.log(person);
// User.prototype.say = function() {
//     console.log("Привет, меня зовут " + this.name);
// }
// person.say();
// person.education = {
//     curs: "it",
//     year: 2000,
// }
// const student = Object.create(person);
// console.log(student);
// console.log(student.__proto__)
// console.log(person.__proto__)
class User {
    age;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    say() {
        console.log("Привет, меня зовут " + this.name);
    }
}
const person = new User("ffff", "ddddd");
person.age = 22;
console.log(person);
const { age, name } = person;
console.log(age);
console.log(name);