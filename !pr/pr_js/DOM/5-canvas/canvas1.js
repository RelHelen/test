let canvas = document.querySelector('#c1');
let ctx = canvas.getContext('2d');
//строим заполенный прямоугольник
//x,y, width,height
ctx.fillStyle = "red";
ctx.fillRect(38, 38, 150, 75);

ctx.fillStyle = "blue";
ctx.fillRect(70, 70, 75, 75);

//очистка всего канваса
ctx.clearRect(0, 0, 600, 300);

//строим пустой прямоугольник
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.rect(38, 38, 75, 75);
ctx.stroke();
ctx.fillStyle = 'orange';
ctx.fill();