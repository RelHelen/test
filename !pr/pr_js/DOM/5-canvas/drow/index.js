let canvas = document.querySelector('#c1');
//работаем 2 мерной графикой контекст
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//цвет закрашивания


//рисуем кадрат
// ctx.fillStyle = "orange";
// ctx.fillRect(38, 38, 150, 75);

//очистка  канваса
//ctx.clearRect(0, 0, 600, 300);

//строим пустой прямоугольник
// ctx.strokeStyle = "red";
// ctx.fillStyle = 'orange';
// ctx.lineWidth = 2;
// ctx.rect(38, 38, 75, 75);
// ctx.stroke();
// ctx.fill();
//ctx.clearRect(0, 0, canvas.width, canvas.height);

//небольшая анимация на время
// let x = 0;
// setInterval(() => {
//     // если добавить очистку экрана то будет перемещения квадрата
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x++, 0, 50, 100);
// }, 10);



//строим круг
// ctx.fillStyle = 'orange';
//x,y-центр круга,радиус, начала угла начинается справа, конец угла,по часовой стрелке по умолчанию -false
//
// ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI, false);
// //закрашиваем
// ctx.fill();


//треуголник из линий
// ctx.fillStyle = 'magenta';
// ctx.strokeStyle = 'magenta';
// ctx.lineWidth = 2;
// ctx.scale(2, 2);
// //ctx.rotate(10 * Math.PI / 180);
// ctx.beginPath();//сбрасывает путь
// //начальная позиция точки ==сдвигает точку
// ctx.moveTo(100, 50);
// //прокладываем линию к точке ==прорисовывает линию к точке
// ctx.lineTo(50, 100);
// ctx.lineTo(175, 100);
// //ctx.lineTo(50, 50);
// ctx.closePath(); //чтобы соединить линии аналог ctx.lineTo(50, 50);
// // рисуем
// ctx.stroke();


//выодим текст
// ctx.fillStyle = 'blue'
// ctx.font = 'bold 20px Arial';
// ctx.fillText('Hello', 50, 50)

//рисуем на канве
// canvas.addEventListener('mousedown', (e) => {
//     //кликаем и появляетсся круг
//     ctx.beginPath();
//     ctx.fillStyle = 'blue';
//     ctx.arc(e.clientX, e.clientY, 30, 0, Math.PI * 2);
//     ctx.fill();

// })
let isMouseDown;
//переменная запоминает координаты при рисовании

let coords = [];
//чтобы линия была непрыровной и на нажатие
//чтобы убрать gap -дыры необходимо соединить круги

canvas.addEventListener('mousemove', (e) => {

    //рисуем только когда мыш зажата
    if (isMouseDown) {
        //запоминаем все текщие положения мыши
        coords.push([e.clientX, e.clientY]);
        //рисуем
        drow(e);

    }

})

function drow(e) {
    console.log(e.clientX, e.clientY);
    ctx.strokeStyle = 'blue';
    let x = 10;
    ctx.lineWidth = x;
    //чтобы закрашивать пространство
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath(); //сбрасываем путь
    //кликаем и появляетсся круг
    ctx.fillStyle = 'blue';
    ctx.arc(e.clientX, e.clientY, x / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath(); //сбрасываем путь
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener('mousedown', (e) => {
    isMouseDown = true;
})
canvas.addEventListener('mouseup', (e) => {
        ctx.beginPath(); //сбрасываем путь чтобы можно было прервать линию
        isMouseDown = false;
        //запоминаем те моменты когда мышь отжата
        coords.push('mouseup');

    })
    //добавим контроль 

function clear() {
    console.log('очистили');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); //сбрасывется текущий путь
}

function save() {
    console.log('сохраняем');
    localStorage.setItem('coords', JSON.stringify(coords))
}

function repeat() {
    console.log('вставляем');
    coords = JSON.parse(localStorage.getItem('coords'));
    let timer = setInterval(() => {
        let coordsFirst = coords.shift();
        // console.log(coordsFirst);
        e = { clientX: coordsFirst[0], clientY: coordsFirst[1] }
        drow(e);

        if (coords.length == 0) {
            console.log('stop');
            clearInterval(timer);
            ctx.beginPath();
            return;
        }

    }, 30)

}
document.addEventListener('keydown', (e) => {

    //1) сохранение localstorage s=83    
    if (e.keyCode == 83) {
        save();
    }
    //2)воспроизведение v=86
    if (e.keyCode == 86) {
        clear();
        repeat();
    }
    //3)очистку q=81
    if (e.keyCode == 81) {
        clear();
    }
    console.log(e.keyCode);
})