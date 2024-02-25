/* Устанавливаем стартовый индекс слайда по умолчанию: */
let list = slider.querySelector('.slider__list');

let slideIndex = 1,
    offset = 0,
    widthSlider;


// window.addEventListener('load', init);
// window.addEventListener('resize', init);

function init() {
    // console.log('start');
    let gallerySlide = document.querySelectorAll('.gallery-slide');
    //let screenWidth = window.screen.width;
    //Внутренний размер окна — это ширина и высота области просмотра (вьюпорта).
    let screenWidth = window.innerWidth;

    //  console.log('screenWidth=', screenWidth);
    // console.log('gallerySlide=', gallerySlide);
    if (screenWidth <= 768) {
        gallerySlide.forEach(element => {
            // console.log('element=', element);
            element.style.cssText = 'flex: 0 0 100%; max-width: 100%';
        });
    } else {
        gallerySlide.forEach(element => {
            element.style.cssText = 'flex: 0 0 25%; max-width: 25%';
        });
    }
    ///////

    // сдвиг минус следующий, кнопка право
    slider.querySelector('.next').addEventListener('click', function() {
        slideIndex = nextSlide();
        let listElems = document.querySelectorAll(".gallery-slide");
        if (slideIndex >= listElems.length) {
            slideIndex = listElems.length - 1;
            //для зацикливания
            // slideIndex = 1;
            // offset = 0;
        }

        let width = listElems[slideIndex].offsetWidth;

        //console.log('width=', width);
        offset -= width;
        // последнее передвижение вправо может на 1 элемент
        offset = Math.max(offset, -width * (listElems.length - 4));
        // console.log('offset=', offset);
        // console.log('offset max=', offset);
        // console.log('slideIndex', slideIndex);
        list.style.transform = "translateX(" + offset + "px)";
    });
    // сдвиг плюс предыдущий, кнопка лево
    slider.querySelector('.prev').addEventListener('click', function() {
        slideIndex = previousSlide();
        let listElems = document.querySelectorAll(".gallery-slide");

        if (slideIndex < 1) {
            slideIndex = 1;
            //для зацикливания
            // slideIndex = listElems.length - 1;
            // offset = -document.querySelectorAll(".gallery-slide")[slideIndex].offsetWidth * (listElems.length - 4);
        }
        let width = document.querySelectorAll(".gallery-slide")[slideIndex].offsetWidth;

        offset += width;
        console.log('offset=', offset);
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        offset = Math.min(offset, 0);
        // list.style.marginLeft = offset + 'px';
        // console.log('offset min=', offset);
        // console.log('slideIndex=', slideIndex);
        list.style.transform = "translateX(" + offset + "px)";
    });


    /* Увеличиваем индекс на 1 — показываем следующий слайд: */
    function nextSlide() {
        return slideIndex += 1
    }

    /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
    function previousSlide() {
        return slideIndex -= 1;
    }
}