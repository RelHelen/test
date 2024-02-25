import slideMenu from './menu.js';
import renderMovies from './renderMovies.js';
// import showSlides from './slider.js';
//import createCard from './createCard.js';
// slideMenu('.header__burger-btn', '.navigation', 'navigation_active', '.navigation__link, .navigation__close');
slideMenu({
    openBtn: '.header__burger-btn',
    menu: '.navigation',
    classMenu: 'navigation_active',
    closeBtn: '.navigation__link, .navigation__close'
});

const url = 'https://raw.githubusercontent.com/RelHelen/cinema/main/film.JSON';
// функция получения данных из файла
const getData = async url => {
    // const response = await fetch(url);
    // const data = await response.json();
    // return data;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);           
        return data;
    } catch (error) {
        console.error('Ошибка__:', error);
    }
}


// получаем данные по Movies

const getMovies = async(url) => {
    //await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
    const data = await getData(url);
    //получим только фильмы
    let dataMovies = data.filter(card => card.Type == 'movie');
    const [firstCard, ...moviesCard] = dataMovies;
    //последний фильм это фильм недели
    let length = dataMovies.length;
    filmWeek(dataMovies[length - 1]);

    moviesCard.length = 9; //9 карточек
    //console.log('moviesCard   : ', moviesCard);

    //создание карточки для слайдера
    createCard(moviesCard);

    //return data;
};
const getToper = async(url) => {
    const data = await getData(url);
    let dataChange = await [...data];
    let dataToper = [];
    dataChange = dataChange.map(() => {
        if (dataToper.length == 6) return;
        let dataTop = dataChange.reduce(async(max, cyrent) => {
            return parseInt(cyrent.Metascore) > parseInt(max.Metascore) ? cyrent : max;
        });
        dataChange.splice(dataChange.indexOf(dataTop), 1);
        //  console.log('dataTop.Metascore', dataTop.Metascore);
        dataToper.unshift(dataTop);
    });
    //console.log('dataToper   : ', dataToper);

};
// const createData2 = () => {
//     const url = 'https://raw.githubusercontent.com/RelHelen/cinema/main/film.JSON';
//     getData(url)
//         .then(data => {
//             // проверяем
//             //console.log(data)
//             return data;
//         })
//         .catch(error => {
//             console.error('Ошибка:', error);
//         })
// };


// try {
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         // console.log(JSON.stringify(data));
//         // console.log(data);
//         //createData(data);
//         createCard(data);
//     }
// } catch (error) {
//     console.error('Ошибка:', error);
// }


//renderMovies();


//создание карточек в галереи
const createCard = async(data) => {
    //const data = await getMovies();
    //data = data.results;
    //console.log(data);
    const listCard = document.querySelector('.slider__list');
    let str = '';
    data.forEach(async(item) => {

        str += `
        <div class="gallery-slide">
        <article class="poster-entity" data-role="hover-wrap">
            <div class="gallery-poster">
                <img class="embed-responsive-item" src="${item.Poster}" alt="" />
            </div>
           
            <div class="d-over bg-highlight-bottom">
                <div class="" >
                    <a class="action-icon-theme action-icon-bordered rounded-circle" href="https://www.youtube.com/watch?v=${item.imdbID}" data-magnific-popup="iframe">
                        <span class="icon-content"><i class="fas -fa-play"></i></span>
                    </a>
                </div>
                <h4 class="entity-title">
                    <a class="content-link" href="#">${item.Title}</a>
                </h4>
                
                <div class="entity-info">
                    <div class="info-lines">
                        <div class="info info-short">
                            <span class="text-theme info-icon"><i class="fas fa-star"></i></span>
                            <span class="info-text">${item.imdbRating} / 10</span>
                            
                        </div>
                        <div class="info info-short">
                            <span class="text-theme info-icon"><i class="fas fa-clock"></i></span>
                            <span class="info-text">${item.Runtime}</span>
                            <span class="info-rest"> </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </article>
    </div>
`
    })
    listCard.innerHTML = str;
}


//film-week
const filmWeek = async(data) => {
    //console.log('filmWeek', data);
    const filmCard = document.querySelector('.film-week');
    let str = `
    <div class="container film-week__container" data-rating="${data.imdbRating}">
        <div class="film-week__poster-wrapper">
        <img class="film-week__poster" src="${data.Poster}" alt=" ">                   
        </div>
        <h2 class="film-week__title">${data.Title}</h2>
        <a class="film-week__watch-trailer tube" href="https://youtu.be/${data.imdbID}" aria-label="смотреть трейлер" title="смотреть трейлер"></a>
    </div>
    `
    filmCard.innerHTML = str;
}

//top movies
const createTopCard = async(data) => {
    const listCard = document.querySelector('.other-films__list');
    let str = '';
    data.forEach((item) => {

        str += `
        <div class="gallery-slide">
        <article class="poster-entity" data-role="hover-wrap">
            <div class="gallery-poster">
                <img class="embed-responsive-item" src="${item.Poster}" alt="" />
            </div>
           
            <div class="d-over bg-highlight-bottom">
                <div class="" >
                    <a class="action-icon-theme action-icon-bordered rounded-circle" href="https://www.youtube.com/watch?v=${item.imdbID}" data-magnific-popup="iframe">
                        <span class="icon-content"><i class="fas -fa-play"></i></span>
                    </a>
                </div>
                <h4 class="entity-title">
                    <a class="content-link" href="#">${item.Title}</a>
                </h4>
                
                <div class="entity-info">
                    <div class="info-lines">
                        <div class="info info-short">
                            <span class="text-theme info-icon"><i class="fas fa-star"></i></span>
                            <span class="info-text">${item.imdbRating} / 10</span>
                            
                        </div>
                        <div class="info info-short">
                            <span class="text-theme info-icon"><i class="fas fa-clock"></i></span>
                            <span class="info-text">${item.Runtime}</span>
                            <span class="info-rest"> </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </article>
    </div>
`
    })
    listCard.innerHTML = str;
}
getMovies(url);
getToper(url);