//данные берем сайта https://jsonplaceholder.typicode.com/
//делаем запросы по данному URL
const requestURL = "https://jsonplaceholder.typicode.com/users";


//вариаент - через промис. функция возвращает промисы
//get
/*
function sendRequest(method, url, body = null) {
    //fetch возвращает промис
    //по умолчп=анию выполняется метод get

    //return fetch(url)
    return fetch(url).then(response => {
        return response.json()
    })
}

sendRequest('GET', requestURL).then(data => console.log(data)).catch(err => console.log(err))
*/

//вызываем функцию, которая возвращает промис, через then получаем данные data
//через POST должны передавать параметры body - телом запроса являются объекты
function sendRequest(method, url, body = null) {
    //fetch возвращает промис
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(err => {
            const e = new Error('Что то пошло не так')
            e.data = console.error
            throw e;
        })
    })
}

const body = {
    name: 'Jon',
    age: 25
}
sendRequest('POST', requestURL, body).then(data => console.log(data)).catch(err => console.log(err))