/*
let user = {
    name: "Petr",
    printName: function(){
        console.log("name:",this.name);
    }
}
user.printName();
user.name = "Fedya";
user.printName();
user.name = "Vasya";
user.printName();

*/
//деструктуризации массива

// вычисляем расход топлива
function getFuelExpense() {
    // расход топлива, литров на 100 км.
    let fuelPer100km = 10;
    // расстояние между Ростовом и Краснодаром в км.
    let distance = 284;
    // получаем расход топлива
    let expense = distance / fuelPer100km;
     //console.log(`Расход топлива на ${distance} км. составит ${expense} л.`);
    return [distance,expense];
    }
   
    let [dist,calc]= getFuelExpense();
    console.log(`Расход топлива на ${dist} км. составит ${calc} л.`);

    // rest-оператор

    function sum(...args){
        let total = 0;
        for (i = 0; i < args.length; i++){
            total += args[i];
        }
        return total;
    }
    console.log( sum(1,2,3));//6

    //когда надо передать именованныее параметры  и какой перечень аргументов
    function sum1(a, b, ...args){
        let total = 0;
        for (i = 0; i < args.length; i++){
            total += args[i];
        }
        return total;
    }
    console.log( sum1(1,2,2,3));//5