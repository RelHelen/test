let k = 0;
//n = +prompt('n> ', '');
let n = 5;
 
for (let i = 1; i <= n; i++) {
    console.log(i);   
}

for (let i = 2; i <= n - 1; i++) {
    console.log(i);
    if (n % i == 0) {
        ++k;
        console.log(i, '  ', k);
    };
}
// простое число
if (k == 0) {
    console.log(n, " - простое")
}

// составное число
else {
    console.log(n, " - составное");
}
console.log(i);