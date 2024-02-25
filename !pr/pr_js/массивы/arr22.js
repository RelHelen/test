//формирвоание массива

function getArray(n) {
    let brr = [];
    for (let i = 0; i < n; i++)
        brr.push(Math.floor(Math.random() * 12));
    return brr;
}

let crr = getArray(3);
let drr = getArray(10);
console.log(drr);

//поиск максимального
function maxArray(array) {

    let res = array.reduce(function(max, elem) {
        if (max > elem) return max
        else return elem;
    })
    return res;
}
console.log(maxArray(drr));
let maxDd = maxArray(drr);

function counMax(array, max) {
    console.log(`  max = ${max}`);
    let c = array.reduce(function(col, elem) {
        if (max == elem) return ++col
        else return col;
    }, 0);
    console.log(`  c = ${c}`);
    return c
}
let cc = counMax(drr, maxDd);
console.log(`кол мак элементов ${cc}`);

function notNull(array, i) {
    let d = array.slice(0, i);
    return d;
}
let m = drr.indexOf(0);
console.log(`индекс 0 =  ${m}`);

console.log('от 1 до 0', notNull(drr, m));



//убрать дубли элементов
function removeDouble(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = array.length; j >= i + 1; j--) {

            if (array[i] == array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array
}
console.log(`без дублей `, removeDouble(drr))

//разница между максимальным элементом и элементом
function distDouble(array, max) {
    let ar = array.map(elem => max - elem)
    return ar
}

console.log(`разница`, distDouble(drr, maxDd))

function distAVG(array) {
    let sum = 0;
    array.forEach(elem => sum = sum + elem)
    let avg = sum / array.length;
    console.log(`avg = ${avg}`)
    let ar = array.filter(elem => elem > avg)
    return ar
}
console.log(`разница avg`, distAVG(drr))