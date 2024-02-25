//*вывод даты

var tt = document.getElementById('tt');
var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
var monthMas = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
var days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
var stringDay = "Сегодня" + day + " " + monthMas[month] + " " + year + ", " + days[d.getDay()];
tt.innerHTML = stringDay;

//*вывод продукции в область заказ

function addProduct(a) {
    var addProd = document.createElement('div');
    //var pp = a;
    var pp = document.getElementById(a);
    console.log(' pp:  ', pp);
    console.log('aa: ', a);
    //var pp = a.parentNode;
    //	console.log(pp);
    //for (var i = 0; i >= pp.length; i++) {
    //  document.write(pp.children[i])
    //}

    var strPrise = pp.children[2].innerHTML; //цена
    var strTovar = pp.children[1].innerHTML; //товар
    var priceNum = strPrise.split(" ");
    console.log(priceNum[0]);
    console.log(strTovar);
    //selectProduct.innerHTML=priceNum; 



    var nodeLi = document.createElement("LI"); // Create a <li> node
    var textpriceNum = document.createTextNode(priceNum); // Create a text node
    var textstrTovar = document.createTextNode(strTovar); // Create a text node

    nodeLi.appendChild(textpriceNum); //добавили текст priceNum в LI                        
    document.getElementById("selectProduct").appendChild(nodeLi); // Append <li> to <ul> with id="myList"

    nodeLi.appendChild(textstrTovar); //добавили текст textstrTovar в LI
    document.getElementById("selectProduct").appendChild(nodeLi);


}