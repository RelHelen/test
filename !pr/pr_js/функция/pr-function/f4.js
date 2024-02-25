//замыкание 

// let a = 1;

// function aa(name) {



//     function jj() {
//         let k = 0;

//         function jjj() {
//             k++;
//             console.log(`${name} = ${a}    ${k}`);
//         }
//         jjj()
//     }

//     jj();
//     return a = a + 1;
// }

// console.log(aa('aa')); //2
// console.log(aa('aa')); //3

// let bb1 = aa;
// console.log(bb1('bb')); //4
// console.log(bb1('bb')); //5
// console.log(aa('aa')); //6


// function cc() {
//     let c = 1;
//     console.log(`c=${c}`);
//     return function() {
//         console.log(`c(c)=${c}`);
//         return ++c;
//     }
// }

// console.log(cc()()); //2
// console.log(cc()()); //2

// let bb = cc();

// console.log(bb()); //2
// console.log(bb()); //2


// function d(h) {
//     let s = h
//     return ++s;
// }
// let g = d(1);
// console.log(g); //2
// console.log(g); //2
// console.log(g); ///2
// console.log(c()); //1
// console.log(c()); //2
// console.log(c()); //3

// let y = c();

// // console.log(y());
// // console.log(y());
// // console.log(y); //4
// function k() {
//     let w = 1;
//     return function m() {
//         return ++w;
//     };
// }
// let p = k();
// console.log(k() + '');
// console.log(p() + 'px'); //2
// console.log(p() + 'px'); //3
// console.log(p());
// console.log(a);



// let a = 'global';

// function outer() {
//     let b = 'outer';

//     function inner() {
//         let c = 'inner';
//         b = 'outer2';
//         console.log('c2=', c); // выдаст 'inner'
//         console.log('b2=', b); // выдаст 'outer'
//         console.log('a2=', a); // выдаст 'global'
//     }
//     console.log('a1=', a); // выдаст 'global'
//     console.log('b1=', b); // выдаст 'outer'
//     inner();
// }
// outer();
// console.log('a3=', a); // выдаст 'global '


function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
    };
}
let peter = person();
peter(); // выведет 'Peter'






// function getCounter() {
//     let counter = 0;
//     return function() {
//         let s = counter;
//         return counter++;
//     }
// }
// let count = getCounter();
// console.log(count()); // 0
// console.log(count()); // 1
// console.log(count()); // 2

// function menu(n) {
//     if (n == 1) return function(x, y) { return x + y; }
//     else if (n == 2) return function(x, y) { return x - y; }
//     else if (n == 3) return function(x, y) { return x * y; }
//     return function() { return 0; }
// }
// // выбираем первый пункт - сложение const action = function(x, y){ return x + y;}
// let action = menu(1);
// // выполняем функцию и получаем результат в константу result  
// let result = action(2, 5);
// console.log(result); // 7
// action = menu(2);
// result = action(4, 5);
// console.log(result); // 7


// let foo = 1;
// let bar = 2;

// function myFunc() {
//     //-- определяем локальные  переменные, 
//     let a = 1;
//     let b = 2;
//     let foo = 3;

//     function myCalc() {
//         a = a + b + foo + bar;
//         return function() { // контекст выполнения функции
//             return a++;
//         }

//     }
//     // console.log('результат: ');
//     return myCalc();

//     // return myCalc();
// }
// // let calc = myFunc();
// // calc();
// let s = myFunc();
// console.log('конец: ', s());
// console.log('конец: ', s());

// let foo = 1;
// let bar = 2;

// let myFunc = function() {
//     //-- определяем локальные  переменные, 
//     let a = 1;
//     let b = 2;
//     let foo = 3;

//     let myCalc = function() {
//         let m = 6;

//         let r = function() {
//             let q = 1;
//             return m++;
//         }
//         return r;
//         // console.log(a)
//     }
//     return myCalc;

// }
// let calc = myFunc(); // 
// let calcQ = calc();
// //console.log(calc()); //8
// console.log(calcQ()); //15
// console.log(calcQ());

// let foo = 1;
// let bar = 2;

// let myFunc = function() {
//     //-- определяем локальные  переменные, 
//     let a = 1;
//     let b = 2;
//     let foo = 3;
//     return function() {
//         return a = a + b + foo + bar;
//     }

// }
// let calc = myFunc(); //  
// console.log(calc()); //8
// console.log(calc()); //15

// let myFunc = function() {
//     //-- определяем локальные  переменные, 
//     let a = 1;
//     let b = 2;
//     let foo = 3;
//     return function() {
//         return a = a + b + foo + bar;
//         // console.log(a)
//     }

// }
// let calc = myFunc();
// console.log(calc()); //8
// console.log(calc()); //15



//let hello = 'Hello';
// let user = function() { // контекст выполнения функции
//     let name = 'John';

//     let getName = function() { // контекст выполнения функции
//         return name;
//     }

//     let sayHello = function() { // контекст выполнения функции
//         console.log(getName());
//         //console.log(hello + ', ' + name);
//     }
//     sayHello();
//     console.log('Вам сообщение');
// }
// user();

//проверка пароля
// Представьте себе, что мы проектируем систему, в которой нужно запомнить пароль пользователя, а потом проверять его, когда пользователь будет заново заходить.Можно смоделировать функцию savePassword, которая принимает на вход пароль и возвращает предикат, то есть функцию, возвращающую true или false, для его проверки.
// let Pass = function(w) {
//     let password = w
//     let Correct = function(world) {
//         return password === world
//     }
//     return Correct;
// }
// let world = prompt('Введите пароль');
// const saveP = Pass(world);

// do {
//     world = prompt('Проверкак пароля');
//     isCorrect = saveP(world);
//     if (isCorrect) {
//         alert("Верный пароль");
//         break;

//     } else {
//         alert("НЕ Верный пароль");

//     }
// } while (confirm("Продолжить?"))



//const savePassword = password => passwordForCheck => password === passwordForCheck;