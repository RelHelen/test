//let colors = ['black', 'white', 'grey'];

// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// colors[1] = 'yellow';
// console.log(colors)
// colors[3] = 'red'; // ['black', 'yellow', 'grey', 'red']    добавили значение
// colors[10] = 'green'; // ['black', 'yellow', 'grey', 'red', , , , , , 'green']
// console.log(colors)

// colors = ['bg_red'];
// console.log(colors)
// console.log(colors[0])
// console.log(colors.length);
// console.log(['black', 'yellow', 'grey', 'red'].length);
//let arr = [-4, 123, 7, 50, 24]
// let arrPlus = arr;
// arrPlus = [...arr];
// console.log(arrPlus);
// //.log(...arr);
// let arrMinus = [-1, -7, -50, -9, -24];
// arr = [...arr, ...arrMinus]
//console.log(arr);


// console.log(arr);
//console.log(arrPlus); 
// console.log(arrMinus);
// let max = 0,
//     maxi = 0;
// arr.forEach(function(elem, i, a) {
//     if (max <= elem) {
//         max = elem;
//         maxi = i;
//     }
// })
// console.log(maxi);
// let k = arrPlus.push(max);
// console.log(k);
// console.log(arrPlus);
// let a = arrPlus.pop();
// console.log(a);
// let arr = [];
// for (i = 1; i <= 3; i++) {
//     let a = +prompt('введите число');
//     arr.push(a);
// }
// console.log(arr);

// const users = ["Tom", "Sam", "Bob"];
// console.log(users); //  ["Tom", "Sam", "Bob"]
// const people1 = [...users];
// const people2 = new Array(...users);
// const people3 = Array.of(...users);
// users[1] = "Petr";
// people1[3] = 'Ass';
// console.log(users);
// console.log(people1); //  ["Tom", "Sam", "Bob"]
// console.log(people2); //  ["Tom", "Sam", "Bob"]
// console.log(people3); //  ["Tom", "Sam", "Bob"]
// let elFirst = arr[0];
// let n = arr.length;
// let indLast = n - 1;
// let elLast = arr[indLast];
// //let brr = arr;
// let brr = arr.slice();
// let crr = [...arr];
// console.log(arr)
// console.log(brr)
//     // let dop = arr[0];
// arr[0] = arr[indLast];
// arr[indLast] = dop;
// console.log(arr)
// console.log(brr)
// console.log(crr)
// var arr = ["Яблоко", "Апельсин", "Груша"];
// 
// arr.forEach(function(item, i, arr) {
//     console.log(arr);
// });
// 
// let color = ['black', 'yellow', 'grey', 'red']
// color.forEach(function(elem, i) {
//     console.log(`color[${i}] = ${elem}`);
// });
// let sum = 0;
// let arr = [123, 7, 50, -9, 24]
// let arr2 = [1, 2, 3, 4]
// arr.push(arr2);
// arr.pop();
// arr.pop();
// arr.unshift(50);
// console.log(arr);
//arr.shift();
// let s = arr.push(2);
// console.log(s);
// console.log(arr);
// arr.forEach(function(elem) {
//     sum = sum + elem;
// })
// console.log(sum);
// var s = 0;
// var j = 0;
// let arr = [123, 7, 50, -9, 24]
// numChet = []
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         numChet.push(arr[i]);
//     };
// };
// console.log(numChet);
let q = [1, 2, 0, 7, , NaN, 0];
// console.log(`q=`, q);
// if (q.includes(NaN)) console.log("есть NaN"); //есть NaN
// if (q.includes(undefined)) console.log("есть undefined"); //есть undefined


q.forEach((elem, i, arr) => {
    //console.log(elem);
    if (isNaN(elem)) {
        //console.log(elem);
        //console.log(i);
        // q.splice(i, 1)
    }


})
console.log(q);
let ni;

let n = q.some((elem, i) => {
    if (elem == 0) {
        ni = i;
        console.log(ni);
        return true;
    } else {
        return false;
    }
});
console.log(n);

let c = q.filter(function(elem) {
    return elem > 1;
});
console.log(c);