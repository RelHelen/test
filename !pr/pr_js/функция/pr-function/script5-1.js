// function logArguments(x = 1) {
//   console.log('result:');
//   console.log('x=' + x);
//   for (i = 0; i < arguments.length; i++) {
//     console.log('arguments[' + i + ']' + arguments[i]);
//   }
// }
// logArguments();


// function max() {
//     let x;
//     console.log('arguments=' + arguments.length);
//     if (arguments.length == 0) {
//         // x = false;
//         x = 'undefinded';
//         //return undefined; //завершит работу
//     } else {
//         x = arguments[0];
//         for (i = 0; i < arguments.length; i++) {
//             if (x < arguments[i + 1]) {
//                 x = arguments[i + 1];
//                 console.log('arguments[' + i + ']' + arguments[i]);
//             }
//         }
//     }
//     console.log('max=' + x);
//     return x;
// }


//max();

function InputNumer(x) {
    console.log(arguments + ' InputNumer' + x);
    if (x == 1) return 1;
    return InputNumer(x - 1) + ' ' + x;
}
let s = +prompt('Введите число', '');
alert(ShowNumbers(s));

alert('в обратном');
alert(InputNumer(s));

function ShowNumbers(n) {
    var str = InputNumer(n);
    console.log(arguments + 'ShowNumbers ' + str);
    return str;
}