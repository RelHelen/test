const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let score = 0;
const colors = [
  'aquamarine',
  'teal',
  'indigo',
  'mediumvioletred',
  'greenyellow',
  'gold',
  'fuchsia',
  'lime',
  'cyan',
  'coral',
  'orange',
];

//переход экрана
startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
  //делегирование событий
  //если при нажатии попадаем на класс time-btn
  //contains - включает
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    console.log(event.target);
    event.target.remove();
    createRNDCircle();
  }
});

function startGame() {
  //случайный размер кружочка
  createRNDCircle();
  setTime(time);
  setInterval(decreaseTime, 1000);
}
//обратный отчет
function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (time < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}
//вывод времени
function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}
//окончание игры стоп
function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Cчет: <span class="primery">
  ${score}</span></h1>`;
}
//дестрикторизаци
let { width, height } = board.getBoundingClientRect();
//создание динамического кружочка по размерам и положению
function createRNDCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  let size = getRNDNumber(10, 60);
  let colorInd = getRNDNumber(0, colors.length - 1);
  let color = colors[colorInd];

  circle.style.width = circle.style.height = `${size}px`;

  circle.style.backgroundColor = color;
  circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

  let x = getRNDNumber(0, width - size);
  let y = getRNDNumber(0, height - size);
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

//функция рендом
function getRNDNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
