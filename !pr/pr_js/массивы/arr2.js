let arr = [123, 7, 50, -9, 24, , 5];
//alert("вывод элементов");
//arr.forEach(elem => alert(elem));
//arr.forEach(alert);
//console.log(arr);
//alert(arr);
let k = 0;
//arr.forEach(elem => ++k);

for (elem of arr) {
    ++k;
}
//console.log(k);
//alert(k);

/*образовать массив случайных чисел и вывести новый без возможных повторений, удаляется последний*/
function getArray(n) {
    let brr = [];
    for (let i = 0; i < n; i++)
        brr.push(Math.floor(Math.random() * 10) + 1);
    return brr;
}

let crr = getArray(3);
let drr = getArray(10);
console.log(`drr >>`, drr);

function countNull(arr) {
    let k = 0;
    arr.forEach((elem) => elem == 0 ? k++ : k);
    return k;
}
// let k0 = countNull(drr);
// console.log(`k0= ${k0}`);
//удалить все нулевые  элементы, если есть
function removeNull(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == 0) {
            arr.splice(i, 1);
        }
    };
    return arr;
}


// console.log(removeNull(drr));
// let srr = removeNull(drr);
// console.log(`srr = `, srr)
// console.log(`drr = `, drr)
//увелить все четные элементы на 1  
/*
for (let i = drr.length - 1; i >= 0; i--) {
    if (drr[i] % 2 == 0) {
        drr.splice(i, 1, drr[i] + 1);
    }
};
*/
//получить  все четные элементы из массива
drr.forEach((elem, i) => {

});
/*

console.log(drr);
console.log("--------------------------------------------------------");
crr[0] = 5;
crr[2] = 10;

drr[0] = 5;
drr[2] = 10;
drr[3] = 5;

console.log(crr);
console.log(drr); * /

//во вотором масииве удалить все числа, которые есть в первом массиве
// удалить встечающиеся числа перового масссива из второго массива
/*function arrCompare(arr, brr) {
arr.forEach((elem1, i1) => {
    brr.forEach((elem2, i2) => {
            if (elem1 == elem2) {
                brr.splice(i2, 1);
            }
        }

    )
});
console.log(arr);
console.log(brr);

}
arrCompare(crr, drr);*/


//////найти номерэелемента
console.log(drr);
if (drr.indexOf(10) > 0) console.log("есть 10");
if (drr.includes(10)) console.log("есть 10");
let q = [1, 2, 4, 7, , NaN, 0];
console.log(`q=`, q);
if (q.includes(NaN)) console.log("есть NaN");
if (q.includes(undefined)) console.log("есть undefined");

// for (elem of q) {
//     console.log(elem);
//     if (elem === undefined) {
//         elem = 0;
//         console.log(elem);
//     }
// }
for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] === undefined) {
        q[i] = 0;
        console.log(q[i]);
    }
};
console.log(`q=`, q);