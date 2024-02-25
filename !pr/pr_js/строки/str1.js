let str = `hello`;
for (elem of str) {
    // console.log(elem)
}
//console.log(str[0].toLocaleUpperCase());
//console.log(str);
let str2 = 'Hello World';
//console.log(str2.indexOf('World')); // 6

//Найти все вхождения строки ма
let str3 = 'sdgssg@vgg.ttt';
let pos = 0;
let posIn;
// while (pos > 0) {
//     pos = str3.indexOf('@', pos);
//     //if (posIn == -1) break;
//     console.log(pos);
//     pos += 1;
// }
pos = -1;
while ((pos = str3.indexOf('@', pos + 1)) != -1) {
    //console.log(pos);
}


// let str4 = ' Hello World';
// console.log(str4);
// str4.trim() // удаляет пробел с начала строки
// console.log(str4);
// let world1 = str4.slice(0, 5);
// let world2 = str4.slice(6, -3);
// console.log(world1);
// let world3 = str4.substr(3, 2); //lo
// console.log(world3);



//pos = str3.indexOf('@', pos);
//console.log(pos);


// let hello = "Привет ";
// let world = "мир";
// let fr = "дружба";
// let str5 = hello.concat(world, ' ', fr);
// let str_1 = hello + ' ' + world + ' ' + fr;

// console.log(str_1); // Привет мир
// 
// let message = "Сегодня была   прекрасная погода";
// let messageParts = message.split(" ");
// console.log(messageParts); // ["Сегодня", "была", "прекрасная", "погода"]
// 
// let text1 = 'привет';
// let text2 = 'мир';
// let text3 = '     JavaScript    ';
// 
// // соединяем две строки
// const result1 = text1.concat(' ', text2);
// console.log(result1); // Вывод: "привет мир"
// 
// // преобразовываем строку к верхнему регистру
// const result2 = text1.toUpperCase();
// console.log(result2); // Вывод: HELLO
// 
// // убираем пробелы из строки
// text3 = text3.trim();
// console.log(text3); // Вывод: JavaScript
// 
// // преобразовываем строку в массив
// const result4 = text1.split();
// console.log(message); // ["привет"]
// 
// // «слайсим» строку
// const result5 = text1.slice(1, 3);
// console.log(result5); // "ри"


// let srr = [1, 3, 4, 6]
// let strrr = srr.join(' ');
// console.log(strrr); //

//из строки в массив чисел
// let a = " 1 2 3 4 5 6 7";
// a = a.trim();
// let arr = a.split(" ").map(function(elem) {
//     elem = parseInt(elem);
//     return elem;
// });
// console.log(arr[1] + arr[3]); //6
// 
//поиск и замена первого встречного
// const test1 = (str, world) => {
//     for (let elem of str) {
//         str = str.replace(world, '');
//     }
//     console.log(str); // only first 'big' removed
// };
// test1('My big string lol, big big', ' big')

const first_char = (str) => {
        let fc = str.charAt(0).toUpperCase();
        console.log(fc);
        let strNew = str.replace(str.charAt(0), fc);
        console.log(strNew);
    }
    //first_char('big string lol');

// let str02 = 'big string big lol';
// let fc = str02.charAt(0).toUpperCase();
// let str20 = str02.replace(/^\s\w/g, fc);
// console.log(str20);

// function capitalize(...words) {
//     return words.map((word) => `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`).join(' ');
// }
// console.log(capitalize('some', 'kind', 'of', 'lower-cased', 'words', '...'));
// let string = 'big string lol';
// let arr = string.split(/\s/);
// console.log(arr);
// string = arr.map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ');
// console.log(string);

// let hello = "Добрый день. Этот день прекрасен.Деньской";
// hello = hello.replace(/\bдень\b/g, 'вечер ');
// //hello = hello.replace(/\s/g, '_');
// console.log(hello);

let tel = '(465)-4646-546-5';
// tel = tel.replace(/-|\(|\)/g, '');
// console.log(tel);

// tel = '(465)-4646-546-5';
// let reg = /^((8|+7)[\-]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
// tel = /^((8|+7)[\-]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(tel);
// console.log(tel);

//let regex = /^((8|+7)[\-]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

// /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;


// дальше идет проверка на соответствие выражению
// if (!regex.test(phone)) {
//     console.log('Не соответствует');
// } else {
//     console.log('Соответствует');
// }
// 
// function validatePhone(phone) {
//     let regex = /^(\+7|7|8)?[\s\-]?\(?[763][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
//     return regex.test(phone);
// }
// 
// function val(phone) {
//     //let regex = /^[0-9]+$/g;
//     // let regex = /^[0-9]{5}[\s\-]?[0-9]{2}$/;
//     //let regex = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
//     // let regex = /^[\d\+][\d\(\)\ -]{4,14}\d$/
//     // A-zА-Яа-я\-
//     let regex = /^[A-Za-zА-Яа-я\-\s]+$/;
//     return regex.test(phone);
// }
// 
// let phone = 'ыddf ва fhsб,';
// if (!val(phone)) {
//     console.log('Не соответствует');
// } else {
//     console.log('Соответствует!');
// }

// //поиск и замена всех
// const test2 = (str) => {
//     str = str.split(' big').join('');
//     console.log(str); // all 'big'
// };

// let str10 = 'My big string lol, big big';
// let www = str10.replace(' big', '');
// 
// console.log(www); // all 'big'
// test1(str10);
// test2(str10);

//let q = a.split(' '); //bp cnhjrb d vfccbd
//console.log(q);


// let q1 = q.reverse();
// console.log(q1);
// let q3 = q1.join(' ');
// console.log(q3);
// let q4 = a.split(" ").reverse().join(';')
// console.log(q4);

// let str6 = "Widget";
// 
// if (~str6.indexOf("Widget")) {
//     console.log('Совпадение есть'); // работает
// }