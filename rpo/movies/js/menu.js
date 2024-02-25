import createToper from './createToper.js';
import moveline from './moveline.js';

const openMenu = (nav, active) => {
    nav.classList.add(active)
}
const closeMenu = (nav, active) => {
        nav.classList.remove(active)
    }
    //const slideMenu = (openBtn, menu, classMenu, ...closeBtn) => {
    //console.log(closeBtn);
const menuLink = (target) => {

    filmWeek.style.display = 'none';
    galleryFilms.style.display = 'none';
    // moviLine.style.display = 'none';

    // title.textContent = target.textContent;

    //Популярные Фильмы
    // if (target.classList.contains('get-nav__link_popular-movies')) {
    //     getPopular('movie').then((data) => {
    //         //console.log(data);
    //         renderCard(data.results, 'movie');
    //     });
    // }
    //заказ билет
    if (target.classList.contains('get-nav__link_moveline')) {
        moviLine.style.display = 'block';
        moveline();
    }

    //Top Фильмов
    if (target.classList.contains('get-nav__link_top-movies')) {
        topFilms.style.display = 'block';
        createToper();
    }


}
const slideMenu = (setting) => {
    //деструктивное присвоение
    const { openBtn, menu, classMenu, closeBtn } = setting;
    const burgerBtn = document.querySelector(openBtn);
    const navigation = document.querySelector(menu);
    const navigationClose = document.querySelectorAll(closeBtn);

    burgerBtn.addEventListener('click', () => {
        openMenu(navigation, classMenu);
    });
    navigationClose.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const target = event.target.closest('.get-nav__link'); //чтобы видеть клик именно по ссылке, остановили поднятие вверх
                //если кликнули по сслке, то target имеет значение, иначе пусто

                if (target) {
                    menuLink(target);
                };
                closeMenu(navigation, classMenu);
            })
        })
        // console.log(navigationClose);
}

export default slideMenu;