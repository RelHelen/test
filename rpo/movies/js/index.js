import slideMenu from './menu.js';
import getData from './services.js';
import search from './search.js';
import moveline from './moveline.js';

//slideMenu('.header__burger-btn', '.navigation', 'navigation_active', '.navigation__link, .navigation__close');
slideMenu({
    openBtn: '.header__burger-btn',
    menu: '.navigation',
    classMenu: 'navigation_active',
    closeBtn: '.navigation__link, .navigation__close'
});


// Координатами элемента является расстояние в пикселях от осей системы координат до его левого верхнего угла.С помощью метода элемента getBoundingClientRect() можно получить подробные данные о координатах элемента и его размере.
window.addEventListener('scroll', e => {
    document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
    const elem = document.querySelector('h2.film-header');
    const rect = elem.getBoundingClientRect();
    let scrollEl = window.scrollY / 10;
    let scrollxx = rect.x;
    // console.log('--------------------------------');
    // console.log('scrollEl =', scrollEl);
    // console.log('rect.y =', rect.y);
    // console.log('window.screen.height =', window.screen.height);
    // console.log('window.innerHeight =', window.innerHeight);   
    if (rect.y < window.innerHeight && rect.y > 0) {
        elem.classList.add('scroll-left');
    }

})



// получаем данные по Movies
const getMovies = async(leng, type) => {
    const data = await getData();
    let typeMovie = type ? type : 'movie';
    //получим только фильмы
    let dataMovies = data.filter(card => card.Type == typeMovie);
    const [firstCard, ...moviesCard] = dataMovies;
    moviesCard.length = leng ? leng : moviesCard.length; //9 карточек
    //console.log('moviesCard.length   : ', moviesCard.length);
    //создание карточки для слайдера
    //createCard(moviesCard);
    return moviesCard;
};






//создание карточек в галереи
const createCard = async() => {
    //const data = await getMovies();
    //data = data.results;
    //console.log(data);
    const data = await getMovies(9);
    const listCard = document.querySelector('.slider__list');
    let str = '';
    data.forEach(async(item) => {

        str += `<div class = "gallery-slide" >
                <article class = "poster-entity"  data-role = "hover-wrap" >
                        <div class = "gallery-poster" >
                        <img class = "embed-responsive-item"
                        src="${item.Poster}"alt = ""/>
                        </div>
                        <div class = "d-over bg-highlight-bottom">
                        <div class = "" >
                        <a class = "action-icon-theme action-icon-bordered rounded-circle"
                        href = "https://www.youtube.com/watch?v=${item.imdbID}"
                        data-magnific-popup = "iframe" >
                        <span class = "icon-content > <i class = "fas -fa-play" > </i></span>
                        </a> </div> <h4 class = "entity-title">
                        <a class = "content-link"
                        href ="#"> ${item.Title } </a> </h4 >

                        <div class = "entity-info" >
                        <div class = "info-lines" >
                        <div class = "info info-short" >
                        <span class = "text-theme info-icon" > <i class = "fas fa-star" > </i></span >
                        <span class = "info-text" > ${item.imdbRating }
                        / 10</span > </div> <div class = "info info-short" >
                        <span class = "text-theme info-icon" > <i class = "fas fa-clock" > </i></span >
                        <span class = "info-text" > ${ item.Runtime } </span> 
                        <span class = "info-rest" > </span> </div >

                        </div> 
                        </div> 
                        </div>
                         </article > 
                         </div>
                        `
    })
    listCard.innerHTML = str;
}

//последний фильм это фильм недели
//film-week
const filmWeek = async() => { //console.log('filmWeek', data);

    const data = await getMovies();
    let length = await data.length;
    const lastFilm = await data[length - 1];
    const filmCard = document.querySelector('.film-week');
    let str = ` <div class = "container film-week__container"
                data-rating = "${lastFilm.imdbRating}" >
                <div class = "film-week__poster-wrapper" >
                <img class = "film-week__poster"
                        src = "${lastFilm.Poster}"
                        alt = " ">
                        </div>
                <h2 class = "film-week__title" > ${lastFilm.Title} </h2> 
                <a class = "film-week__watch-trailer tube"
                        href = "https://youtu.be/${lastFilm.imdbID}"
                        aria-label = "смотреть трейлер"
                        title = "смотреть трейлер"> </a> 
                 </div >
                        `
    filmCard.innerHTML = str;
}


//getMovies(url);
createCard();
filmWeek();
search();
moveline();