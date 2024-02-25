const products = [{
    'id': '1',
    'title': 'Картина Осень',
    'src': '1.jpg',
    'price': '235'
}, {
    'id': '2',
    'title': 'Картина Лето',
    'src': '2.jpg',
    'price': '356'
}, {
    'id': '3',
    'title': 'Картина Зима',
    'src': '3.jpg',
    'price': '574'
}, {
    'id': '4',
    'title': 'Картина Весна',
    'src': '4.jpg',
    'price': '456'
}, ]

//*вывод продукции в область продукции
function creatCategory() {
    let bl = "";
    var strTable = "";
    for (let elem of products) {
        console.log(elem);
        const cardProduct = document.createElement('div');
        bl = `<div class ="cardProduct" id =pr${elem['id']} name =pr${elem['id']}>
        <img id="img${elem['id']}" src = "img/${elem['src']}">
        <h2 id="h${elem['id']}">${elem['title']}</h2>
        <div id="price${elem['id']}" class ="price">${elem['price']} p.</div>
        <button class="btnProd"   id="btn${elem['id']}" onclick="addProduct('pr${elem['id']}')"> Купить </button></div>`;
        cardProduct.innerHTML = bl;
        category.append(cardProduct);
    }
}
creatCategory();
//*вывод продукции в область заказ


function addProduct(param) {

    const addProd = document.createElement('div');
    //var pp = a;
    const pp = document.getElementById(param);
    console.log(' elem:  ', pp);
    console.log('param: ', param);
    var prodCharchet = pp.children;
    console.log('ppChild', prodCharchet);

    var strPrise = prodCharchet[2].textContent; //цена
    var strTovar = prodCharchet[1].textContent; //товар
    var priceNum = strPrise.split(" ");
    console.log('Prise', priceNum[0]);
    console.log('Tovar', strTovar);

    var nodeLi = document.createElement("LI"); // Create a <li> node
    var textpriceNum = document.createTextNode(priceNum); // Create a text node
    var textstrTovar = document.createTextNode(strTovar); // Create a text node

    nodeLi.appendChild(textpriceNum); //добавили текст priceNum в LI                        
    document.getElementById("selectProduct").appendChild(nodeLi); // Append <li> to <ul> with id="myList"

    nodeLi.appendChild(textstrTovar); //добавили текст textstrTovar в LI
    document.getElementById("selectProduct").appendChild(nodeLi);
}
//*вывод продукции в область заказ, если убрать событие click в кнопках 

const btnProdAll = document.querySelectorAll('.btnProd');

for (btn of btnProdAll) {
    btn.addEventListener('click', function() {
        const addProd = document.createElement('div');

        const param = this.getAttribute('id').match(/\d/g);
        const pp = document.getElementById('pr' + param);
        console.log(' elem:  ', pp);
        console.log('param: ', param);
        var prodCharchet = pp.children;
        console.log('ppChild', prodCharchet);

        var strPrise = prodCharchet[2].textContent; //цена
        var strTovar = prodCharchet[1].textContent; //товар
        var priceNum = strPrise.split(" ");
        console.log('Prise', priceNum[0]);
        console.log('Tovar', strTovar);

        var nodeLi = document.createElement("LI"); // Create a <li> node
        var textpriceNum = document.createTextNode(priceNum); // Create a text node
        var textstrTovar = document.createTextNode(strTovar); // Create a text node

        nodeLi.appendChild(textpriceNum); //добавили текст priceNum в LI                        
        document.getElementById("selectProduct").appendChild(nodeLi); // Append <li> to <ul> with id="myList"

        nodeLi.appendChild(textstrTovar); //добавили текст textstrTovar в LI
        document.getElementById("selectProduct").appendChild(nodeLi);
    });
};