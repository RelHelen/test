// let a = 2;
// let b = 4;
/*
setTimeout(() => {
    b = 7;
    a = 3;     
    let sum = a + b;
    console.log('sum =', sum);
}, 2000);
*/
//необходимо дождаться результата и только потом выводить сумму
// let sum = a + b;
// console.log('sum =', sum);
// b = 3;
let prom = new Promise(function(resolve, reject) {
    console.log('отправили данные и ждем ответа ...')
    setTimeout(() => {
        b = 10;
        a = 15;
        //показываем чего ждем
        resolve([a, b]); //будет выполнена когда колбек setTimeout завершится удачно
    }, 2000);
});
//обработчки промиса
prom.then((data) => {
        console.log('получили данные и выводим результат');
        let [x, y] = data;
        let sum = x + y;
        console.log('1парам =', x);
        console.log('2парам =', y);
        console.log('2sum =', sum);
    })
    // setTimeout(() => {
    //     console.log('что нахлдится в b =', b);
    // }, 5000);


const user = {
    name: 'Ret',
    age: 25,
    job: 'it'
}
console.log(user);
const promUser = new Promise(function(resolve, reject) {
    console.log("запросили на сервере данные");
    setTimeout(() => {
        user.status = 'free';
        resolve(user)
    }, 200);

});
promUser.then(data => {
        console.log("получили данные");
        console.log(data);
    })
    // 
    // const promise = new Promise((resolve, reject) => {
    //     const randomNumber = Math.random();
    // 
    //     if (randomNumber < .5) {
    //         resolve('Все прошло отлично!');
    //     } else {
    //         reject(new Error('Что-то пошло не так'));
    //     }
    // });
    // promise.then((data) => {
    //         console.log(data); // вывести 'Все прошло отлично!'
    //     })
    //     .catch((error) => {
    //         console.log(error); // вывести ошибку
    //     });