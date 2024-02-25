// const school = {
//     title: "Oxford",
//     adres: {
//         city: "Ростов",
//         street: "qwerty"
//     },
//     courses: ["JavaScript", "TypeScript", "Java", "Go"],
//     printStreet: function() {
//         // console.log(this.adres.city)
//         for (let k in this.adres) {
//             console.log(this.adres[k])
//         }
//     },
//     printCourses: function() {
//         // this.courses.forEach(function(course) {
//         //         console.log(this.title, course)
//         //     })
//         this.courses.forEach((course) =>
//             console.log(this.title, course))
//     }
// }
// school.printStreet();
// school.printCourses();






//дестроктуризация

//В данном случае свойство name сопоставляется с переменной userName, а поле email - с переменной mailAddress.
// const user = {
//     name: "Tom",
//     age: 24,
//     phone: "+367438787",
//     email: "tom@gmail.com",
//     account: {
//         login: "tom555",
//         password: "qwerty"
//     }

// };
// const { name: userName, email: mailAddress } = user;
// console.log(userName); // Tom
// console.log(mailAddress); // tom@gmail.com

// const { account } = user;
// console.log(account.login); // tom555
// console.log(account.password); // qwerty

//по отдельности получаем данные из сложного объекта
// let { name, account: { login } } = user;
// console.log(name); // Tom
// console.log(login); // tom555

//Object.keys
// // const tom = {
// //     name: "Tom",
// //     age: 26,
// //     print: function() {
// //         console.log(`Name: ${this.name}  Age: ${this.age}`);
// //     }
// // };
// // let nameKeys = Object.keys(tom);
// // console.log(nameKeys);
// // for (let key of nameKeys) {
// //     console.log(key, tom[key]);
// // }





//создание нового типа
//определяемновый тип черезфункцию коструктор
//Конструктор - это обычная функция за тем исключением, что в ней мы можем установить свойства и методы. Для установки свойств и методов используется ключевое слово this
// function User(dname, dage) {
//     this.name = dname;
//     this.age = dage;
//     this.display = function() {
//         console.log("Имя: " + this.name + "; возраст: " + this.age);
//     }
// };

// function Car(dname, dyea) {
//     this.name = dname;
//     this.year = dyea;
//     this.display = function() {
//         console.log("модель: " + this.name + "год: " + this.year);
//     }
// };
// const Tom = new User("AAA", 1970);
// const bmv = new Car("BMV", 2000);

// Каждая функция имеет свойство prototype, представляющее прототип функции.То есть свойство User.prototype представляет прототип объектов User.И любые свойства и методы, которые будут определены в User.prototype, будут общими для всех объектов User.
// User.prototype.hello = function() {
//     console.log(this.name + " говорит: 'Привет!'");
// };
// let myearDr;
// Car.prototype.yearDr = 2000;
// bmv.yearDr = 2001;
// const reno = new Car("reno ", 2000, 2005);
// Car.prototype.stage = function() {
//     console.log("стаж вождения: " + (new Date().getFullYear() - this.yearDr));

// };
// //reno.yearDr = 2011;

// console.log(reno);
// console.log(reno.yearDr);
// console.log(reno.stage());

// function Car(dname, dyea) {
//     this.name = dname;
//     this.year = dyea;
//     this.display = function() {
//         console.log("модель: " + this.name + "год: " + this.year);
//     }
// };
// const Tom = new User("AAA", 1970);
// const bmv = new Car("BMV", 2000);

// Каждая функция имеет свойство prototype, представляющее прототип функции.То есть свойство User.prototype представляет прототип объектов User.И любые свойства и методы, которые будут определены в User.prototype, будут общими для всех объектов User.
// User.prototype.hello = function() {
//     console.log(this.name + " говорит: 'Привет!'");
// };
// let myearDr;
// Car.prototype.yearDr = 2000;
// bmv.yearDr = 2001;
// const reno = new Car("reno ", 2000, 2005);
// Car.prototype.stage = function() {
//     console.log("стаж вождения: " + (new Date().getFullYear() - this.yearDr));

// };
// //reno.yearDr = 2011;

// console.log(reno);
// console.log(reno.yearDr);
// console.log(reno.stage());
/**/
class Person {
    // name;
    // age;
    constructor(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }
    print() {
        console.log(`Name: ${this.name}  Age: ${this.age}`);
    }
}
const tom = new Person('Tom', 37);
tom.print(); // Name: Tom  Age: 37