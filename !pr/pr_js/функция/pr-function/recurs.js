//n!
// function factorial(n) {
//     if (n === 0) {
//         return 1
//     } else {
//         console.log(n);
//         return n = n * factorial(n - 1)
//     }

// }
// let num = 3;
// let result = factorial(num);
// console.log(`Факториал ${num} равен ${result}`);
// function down(n) {
//     if (n == 1) return 1
//     else {

//         return n + ' ' + down(n - 1);
//     }
// }
// let num = 3;
// let result = down(num);
// console.log(`  ${result}`);

//Написать функцию, которая выводит переданное ей число задом наперед.

function reverse(s) {
    s = String(s);

    if (s.length == 0) return '';

    last = s[s.length - 1];
    // console.log(last);
    // console.log(s.substr(0, s.length - 1));
    rev += last;
    reverse(s.substr(0, s.length - 1));
    return Number(rev);
}
let rev = '';
let x = 123;
console.log('было число=' + x + '  зеркальное число = ' + reverse(x));