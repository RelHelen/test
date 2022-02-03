const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesCount = sidebar.querySelectorAll('div').length;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
console.log(sidebar);
console.log(slidesCount);

let activeSlideIndex = 0;
downBtn.addEventListener('click', () => {
  changeSlide('down');
});
upBtn.addEventListener('click', () => {
  changeSlide('up');
});
//события на клаву
document.addEventListener('keydown', (event) => {
  console.log(event.key); //ключи кнопок
  if (event.key === 'ArrowUp') {
    changeSlide('up');
  } else if (event.key === 'ArrowDown') {
    changeSlide('down');
  }
});

function changeSlide(dir) {
  if (dir === 'up') {
    console.log('up');
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (dir === 'down') {
    console.log('down');
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  console.log('height', height, '   ', mainSlide.style.transform);

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  console.log('height', height, '   ', sidebar.style.transform);
}
