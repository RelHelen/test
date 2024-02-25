console.log('data....');
//создаем асинхронность
//как будто ожидаем запрос сервера respData
/*
setTimeout(() => {
        //колбек
        //отправляем данные на сервер
        console.log(' request  data....');
        let respData = {
                name: 'Petr',
                age: 25,
                job: 'it',
                status: 'busy'
            }
            //получаем данные на клиенте
        setTimeout(() => {
            console.log(' response data....');
            respData.status = 'free all';
            console.log(respData);
        }, 2000);
    }, 2000)
    */
//плохо - много колбеков внутри
//промисы упрощают вложенность и улучшаю работу с асинхронными операциями

//промис - это обещание выполнить асинхронную операцию и потом продолжить работу с результатом операции
//как работаю промисы
//глобальный классPromise
//это класс который позволяет создать инстант
//1 пар resolve - функция, вызывается тогда, когда закончена асинхронная операция успешно
//2 пар reject- функция
/*
const prom = new Promise(function(resolve, reject) {
        //асинхроный код
        //отправляем данные на сервер
        setTimeout(() => {
            console.log('request data....');
            let respData = {
                    name: 'Vasya',
                    age: 27,
                    job: 'econ',
                    status: 'free'
                }
                //говорим промису, что он завершил свое выполение
                //передаем данные для обработки respData
            resolve(respData);
        }, 2000)
    })
    //обращаемся к промису и вызываем метод then - когда выполнится промис
    // в метод then передаем функцию колбек
    //данный колбек вызовется тогда, когда закончится асинхронная операция, будет вызван метод resolve
    //получили данные с базы data, 
prom.then((data) => {
        //console.log(' resolve data....', data);
        const prom2 = new Promise(function(resolve, reject) {
            //получаем данные на клиенте
            setTimeout(() => {
                data.status = 'free all';
                resolve(data)
            }, 2000);

        })
        prom2.then(resData => {
            console.log(' response data....', resData);
        })
    })
    */

//внутри промиса можно влзвращать новый промис, не создавая его через return

const prom = new Promise(function(resolve, reject) {
    console.log('request data....');
    setTimeout(() => {
        let respData = {
            name: 'Vasya',
            age: 27,
            job: 'econ',
            status: 'free'
        }
        resolve(respData);
        //reject(respData);
    }, 2000)
})

//chain - цепь , то есть говорим чейним
prom.then((data) => {
        data.status = 'free all';
        return data;
    })
    .then(clData => {
        console.log(' response data....', clData);
    })
    .catch(err => console.log('error'))
    .finally(() => console.log("выводится всегда"))