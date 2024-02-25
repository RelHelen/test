// Создаем массив из 10 случайных чисел
const arr = [];
for(let i = 0; i < 10; i++) {
  arr.push((Math.floor(Math.random() * 10)) );
}

// Функция, возвращающая максимальный элемент массива
function getMax(arr) {
  return arr.reduce((acc, curr) => acc > curr ? acc : curr);
}

// Функция, подсчитывающая количество повторений максимального элемента
function countMax(arr) {
  const max = getMax(arr);
  return arr.filter(elem => elem == max).length;
}

// Функция, возвращающая новый массив из разницы максимального и текущего элемента
function getDiff(arr) {
  const max = getMax(arr);
  return arr.map(elem => max - elem);
}

// Функция, возвращающая новый массив до первого вхождения элемента равного 0
function getBeforeZero(arr) {
  const index = arr.indexOf(0);
  return index == -1 ? arr.slice() : arr.slice(0, index);
}

// Функция, возвращающая новый массив без повторяющихся элементов
function getUnique(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) == index);
}

// Функция, возвращающая новый массив чисел, больших среднего арифметического
function getAboveAverage(arr) {
  const average = arr.reduce((acc, curr) => acc + curr) / arr.length;
  return arr.filter(elem => elem > average);
}

alert("Максимальный элемент массива: "+ getMax(arr));
alert("Количество повторений максимального элемента: "+ countMax(arr));
alert("Массив из разницы максимального и текущего элемента: "+ getDiff(arr));
alert("Массив до первого вхождения элемента равного 0: "+ getBeforeZero(arr));
alert("Массив без повторяющихся элементов: "+ getUnique(arr));
alert("Массив чисел, больших среднего арифметического: "+ getAboveAverage(arr));