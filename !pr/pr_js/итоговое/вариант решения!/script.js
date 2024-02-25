const x = [{
    'id': '1',
    'title': 'CASIO MQ-24-7BUL',
    'src': 'img/s-1.png',
    'price': '235'
}, {
    'id': '2',
    'title': 'SAUVAGE SA-SV88682RG',
    'src': 'img/s-2.png',
    'price': '356'
}, {
    'id': '3',
    'title': 'CITIZEN JP1010-00E',
    'src': 'img/s-3.png',
    'price': '574'
}, {
    'id': '4',
    'title': 'ROYAL LONDON 41040-01',
    'src': 'img/s-4.png',
    'price': '456'
}, ];
const products = JSON.parse(JSON.stringify(x));

// ====== Добавление карточек товара на страницу используя данные массива
for (const elem of products) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = elem.src;

    let title = document.createElement('h2');
    title.textContent = elem.title;

    let div = document.createElement('div');
    div.classList.add('block-ec');
    card.append(div);

    let price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `₽${elem.price}`;


    let button = document.createElement('div');
    button.classList.add('cart');
    // button.textContent = `Купить`;
    div.append(price, button);

    card.append(img, title, div);
    category.append(card);

}

// ====== Добавление товара в корзину и формирование массива заказов

let buttons = document.querySelectorAll('.cart');
let order = [];
buttons.forEach((elem, i) => {
    order = [];
    console.log(order);
    elem.addEventListener('click', function(e) {
        // console.log(e.target);
        let parent = e.target.closest('.card');
        console.log(parent);
        order.push({
            title: parent.querySelector('h2').textContent,
            price: parent.querySelector('.price').textContent,
        });
        console.log(order);
        setLocalStorage(order);
        showOrder();
    });

});
// ====== показ  заказов
function showOrder() {
    order = getLocalStoraget() || '';
    console.log(order);
    selectProduct.innerHTML = '';
    order.forEach((element, i) => {
        let orderItem = document.createElement('li');
        orderItem.textContent = `${element.price} р. ${element.title}`;
        selectProduct.append(orderItem);

    });
}
// ====== отправление заказа и очистка корзины
subm.addEventListener('click', function(e) {
    e.preventDefault();
    order = [];
    selectProduct.innerHTML = '';
});

function setLocalStorage(str) {
    if (localStorage.getItem("whatch")) {
        localStorage.removeItem("whatch")
    }
    localStorage.setItem("whatch", JSON.stringify(str));
}

function getLocalStoraget() {
    let wishList = localStorage.getItem("whatch") || '';
    wishList = JSON.parse(wishList);

    return wishList;

}