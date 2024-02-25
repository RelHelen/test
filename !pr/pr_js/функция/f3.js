//  let a = 1,
//      b = 2,
//      c = 3,
//      arr = [],
//      str = ['hello', 12, 'world', false, null];

//  function strNum(z, x) {
//      console.log(arguments[0]);
//      console.log(z);
//      for (let i = 0; i < arguments.length; i++) {
//          console.log(arguments[i]);
//          arr.push(arguments[i])
//      }

//  }
//  strNum('hello', 12, 'world', false, null);
//  let brr = arr.map((elem, i) => `{${i+1}:${elem}}`)
//  document.writeln(brr);
//  console.log(brr);
//  console.log(brr.join(","));
//  console.log(arr.join(" "));
// function logArguments(a, b) {
//     console.log(arguments[0]);
//     console.log(a);
//     console.log(b);
// }
// logArguments()
// logArguments(1, 2, 'a', 'hello')
// function logArguments(x) {
//     console.log("x = " + x);
//     for (i = 0; i < arguments.length; i++) {
//         console.log("argument" + (i + 1) + " = " + arguments[i])
//     }
// }
// logArguments(1, 2, 'a', 'hello')



// function sum() {
//     let n = arguments.length;
//     let sum = 0;
//     console.log('n=', n);
//     for (let i = 0; i < n; i++) {
//         console.log(typeof(arguments[i]));
//         if (typeof(arguments[i]) === 'number') {
//             sum = sum + arguments[i]
//         }
// 
//     }
//     return sum;
// }
// console.log(sum(1, 5, '3', -1));
// console.log(sum());



// function sum1(a, b, ...args) {
//     let total = 0;
//     for (i = 0; i < args.length; i++) {
//         total += args[i];
//     }
//     return total;
// }
// console.log(sum1(1, 2, 2, 3)); //5

function display(season, ...temps) {
    console.log(season);
    for (index in temps) {
        console.log(temps[index]);
    }
    for (elem of temps) {
        console.log(elem);
    }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);


// let num = 10;
// console.log(factorial(num))
// 
// function factorial(n) {
//     if (n == 1) return 1;
//     return n * factorial(n - 1);
// }

// //вывод числа от 1 до n

// console.log(displayNumber(num));
// 
// function displayNumber(n) {
//     if (n == 1) return "1";
//     return displayNumber(n - 1) + '  ' + n;
// }
// console.log(stringWithNumbers(num));
// 
// function stringWithNumbers(n) {
//     if (n == 2) return "2";
//     return stringWithNumbers(n - 2) +
//         ", " + n;
// }

//вывод обратного числа 123 321
// let RevNumber = +displayRetNumber(12345);
//console.log(RevNumber);

// function displayRetNumber(n) {

//     if (n < 10) return n
//     else {
//         return n % 10 + '' + displayRetNumber(Math.floor(n / 10));
//     };
// }

//сдвинуть число
// let sdvigNumber = showNum(12345, 2)
//let sdvigNumber = displaysdvigNumber(12345, 4, 10000);
//34512 - 2
//45123 -3
//51234 -4
//12345 -5
//console.log(sdvigNumber);
//console.log(12345 % 10000 * 10 + Math.floor(12345 / 10000));


// function showNum(n, s) {
//     let k = 0;
//     let nn = n;
//     while (nn > 1) {
//         nn = nn / 10;
//         k++
//     }
//     k = Math.pow(10, k - 1);
//     let r = displaysdvigNumber(n, s, 10000)
//     return r;
// }



// function displaysdvigNumber(n, s, k) {
//     if (s <= 0) return n
//     else {
//         return displaysdvigNumber((n % k * 10 + Math.floor(n / k)), s - 1, k) + '   ' + n;
//     }
// }
//12345 -
//1
//2345
//12345

// function makeCounter(s) {
//     let count = s;

//     return function(n) {
//         return count = n + count; // есть доступ к внешней переменной "count"
//     };
// }
// let ccc = makeCounter(0);
// console.log(makeCounter(1))
// console.log(ccc(1));
// console.log(ccc(2));
// console.log(ccc(2));