//  Напишите код, выполнив задание из каждого пункта отдельной строкой:
//      Создайте пустой объект user.
//  Добавьте свойство name со значением John.
//  Добавьте свойство surname со значением Smith.
//  Измените значение свойства name на Pete.
//  Удалите свойство name из объекта.

// const user = {
//     age: 22,
//     name: 'Fedyai',
//     count: {
//         birth: "Ru",
//         life: "Ru"
//     },
//     education: {
//         school: '',
//         profes: '',
//         dop: ''
//     },
//     printName: function() {
//         console.log(this.name)
//     }
// };

// user.year = 2000;
// //console.log(user)
// user.name = "Petr"
// user.printName();
// user.author = user.name;
// user.name = "Petr2"

// user.about = {
//     birthday: '1828',
//     genre: 'повести, романы, драмы',
// }
// console.log(user)

// function isEmpty(obj, prop) {
//     // return (prop in obj)
//     for (let key in obj) {

//         return false;
//     }
//     return true;
// }
// console.log('user  содержит свойства', isEmpty(user, "birthday"));

/*
const person = {};
person.name = "Jeck";
person.surname = "Patric";
person.name = "Petr";
person.nameUser = person.name;
delete person.name;
person['adres birth'] = "Rostov";
person.education = {
    school: '67',
    year: 1990
}
console.log(person);
let tadmin = person;
student.adres = "Rostov";
var nameFriend = user.name;
console.log("nameFriend: " + nameFriend);
const student = user;
student.name = "Petr";
student.adres = "Rostov";
console.log("user.adres " + user.adres); //Rostov
console.log("user " + user.name);
user['adres birth'] = 'Moscow';
console.log("user " + user['adres birth']);

console.log("user.count.birth " + user.count.birth);
user["likes birds"] = true
let key = "country  residence";
user[key] = "Russia"; // то же самое, что и user["country  residence"] = Russia;
console.log(user["country  residence"]);
*/
// user = {
//     name: "qqq"
// }
// console.log("user " + user.name);

// user.name = "Pete";
// console.log("user.name " + user.name);
// console.log("nameFriend: " + nameFriend);
// delete user.name;
// console.log("user.name " + user.name);
// console.log("age" in user);
// console.log("name" in user);


// alert("age" in user);
//  alert("name" in user);

//=== undefined
/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
*/
/*
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
console.log('user не содержит свойства', isEmpty(user));

console.log(user);

let fruit = "apple";

let bag = {
    [fruit]: 5, // имя свойства будет взято из переменной fruit
    name: fruit
};

console.log(bag[fruit]); // 5, если fruit="apple"
console.log(bag.name);
console.log(bag);
bag.name = 'adasd';
console.log(bag);
//var schedule = {};

//console.log(schedule.noSuchProperty); //=== undefined
//console.log('schedule не содержит свойства', isEmpty(schedule)); // true

//schedule.name = "Dfcz";
//console.log(schedule.noSuchProperty); //=== undefined
//console.log('schedule не содержит свойства', isEmpty(schedule)); // false
/**/
/*
У нас есть объект, в котором хранятся зарплаты нашей команды:
*/
/*
var salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
var sum = 0;
for (var key in salaries) {
    sum += salaries[key];
}
console.log(sum);
let clone = {};
//Object.assign(clone, salaries);
clone = {...salaries }
    // console.log(clone);
    // clone.John = 400;
    // console.log(clone);
    // console.log(salaries);
clone.education = {...user.education };
console.log(clone);
clone.education.school = "66";
console.log(clone);
console.log(user);
*/

/*
let userp = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    console.log(this.name);
}

// используем одну и ту же функцию в двух объектах
userp.f = sayHi;
admin.f = sayHi;
console.log(userp);
// эти вызовы имеют  разное значение this
// "this" внутри функции - это объект "перед точкой"
userp.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
*
/
/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.*/
/*var menu = {
  width: 200,
  height: 300,
  title: "My menu"
}; 
function multiplyNumeric(obj) {
    for (var key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
		document.write(key+"   "+salaries[key]+"<br>");
      }
    }
  };
multiplyNumeric(menu);
console.log(menu);
*/
/*
/*
Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом: ширину, высоту, площадь.
*/
/*
 */
// function creatRectangle(a1, b1, a2, b2) {
//     return {
//         x1: a1,
//         x2: a2,
//         y1: b1,
//         y2: b2,
//         // v: {
//         //     v1: 20,
//         //     v2: 30
//         // }
//     }
// }

function CreatRectangle(a1, b1, a2, b2) {

    this.x1 = a1;
    this.x2 = a2;
    this.y1 = b1;
    this.y2 = b2;
    // v: {
    //     v1: 20,
    //     v2: 30
    // }
}
const rectangle = new CreatRectangle(10, 5, 5, 16);
const rectangle2 = new CreatRectangle(1, 5, 5, 1);
//console.log(rectangle);
//person.hasOwnProperty(key)
/**/
//if (typeof this[key] !== 'function') {}

// function printRectangle() {
//     for (let key in this) {
//         if (typeof this[key] !== 'function') {
//             if (typeof this[key] !== 'object') {
//                 console.log(`
//             ${key}: ${this[key] }
//             `)
//             }
//             if (typeof this[key] == 'object') {
//                 for (let key2 in this[key]) {
//                     console.log(`
//             ${[key2] }: ${this[key][key2] }
//             `)
//                 }
//             }

//         }
//     }
//     return '';
// }
const printRectangle = function() {
        for (let key in this) {
            console.log(`${key}: ${this[key] } `)
                // if (typeof this[key] !== 'function') {
                //     console.log(`${key}: ${this[key] } `)
                // }
        }
        return '';
    }
    /**/
CreatRectangle.prototype.print = printRectangle;
// let abb = { a: 1, c: 2, v: 3 }
// abb.print();
//rectangle.print = printRectangle;
console.log("rectangle.print");
console.log(rectangle.print());

// rectangle2.print = printRectangle;
// console.log("rectangle2.print");
// console.log(rectangle2.print());
// var tom = new creatRectangle(10, 5, 5, 10);
// tom.print = printRectangle;
// console.log(tom.print());
// let { x1, x2, y1, y2, v } = rectangle;
// console.log(v);

// 
const widthRectangle = function() {
    return (Math.abs(this.x1 - this.x2));
}

const heightRectangle = function() {
        return (Math.abs(this.y1 - this.y2));
    }
    // 
rectangle.width = widthRectangle;
rectangle.height = heightRectangle;
console.log('rectangle.height');
console.log(rectangle.height());
console.log('rectangle.width');
console.log(rectangle.width());
// 
const squareRectangle = function() {
    return (this.width() * this.height());
}
rectangle.square = squareRectangle;

console.log('rectangle.square');
console.log(rectangle.square());

console.log("rectangle.print");
console.log(rectangle.print());


const rec = Object.create(rectangle);

rec.x1 = 20;
rec.x2 = 30;
console.log("rec");
console.log(rec);

console.log(rec.__proto__);
console.log(rectangle);
// console.log(rectangle.__proto__);
// console.log('proto');
// let obg = [];
// console.log(Object.prototype);

// setTimeout(function() {
//     console.log('вывод площади');
//     //console.log(rectangle.square());
// }, 1000);

//  if (typeof rect[key] !== 'function' || rect[key] === null)

// const people = [{ name: "Tom", age: 37 }, { name: "Sam", age: 41 }, { name: "Bob", age: 21 }];
// const markup = `<ul>
//     ${people.map(person => `<li>${person.name}</li>`)}
// </ul>`;
//const markup = people.map(person => person.name)


// document.body.innerHTML = markup;
// console.log(typeof markup);