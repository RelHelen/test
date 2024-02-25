/*проверка на простое-составное*/
// let k = 0;
// //n = +prompt('n> ', '');
// n = 10;
// for (i = 2; i <= n - 1; ++i) {
//     if (n % i == 0) {++k;
//         console.log(i, '  ', k); };
// 
// }
// // простое число
// if (k == 0) {
//     console.log(n, " простое")
// }
// 
// // составное число
// else {
//     console.log(n, " составное");
// }
//сумма всех положительных чисел
// let num = parseInt(prompt("Введите число"));
// let k = 1,
//     s = 0;
// while (num >= 0) {
//     console.log(`num=${num}`);
//     s = s + num;
//     console.log(`sum=${s}`);
//     num = parseInt(prompt("Введите число"));
// }
// alert(`sum=${s}`);
//Определить количество цифр в введенном числе
//let n = +prompt("Введите число", "");
// let n = 1;
// let i = 0;
// while (n > 0) {
//     n = Math.floor(n / 10);
//     i++;
//     console.log("Количество цифр ", i, '  n=', n);
// }
// console.log("Количество цифр ", i);
//alert("Количество цифр " + i);

//Посчитать факториал введенного пользователем числа.
// let x = 3;
// let i = 1,
//     n = 1;
// while (i <= x) {
//     n = i * n;
//     console.log(`i=${i} n=${n} `);
//     ++i;
// }
// console.log(`n=${n} `);





// let sum = 0;
// let value;
// 
// do {
// 
//     value = +prompt("Введите число", '');
// 
//     if (!value) break;
// 
//     sum += value;
// 
// } while (true)
// 
// 
// alert('Сумма: ' + sum);

// let k = 0;
// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
//     ++k;
//     alert(i); // 1, 3, 5, 7, 9
// }
// alert(`
// k = $ { k }
// `) //k=5