import createElement from './createElement.js';
import getData from './services.js';
import creatModal from './cinema.js';

const searchGet = async() => {
    const urlSchemes = "https://raw.githubusercontent.com/RelHelen/cinema/main/scheme.json";
    let urlli = 'https://raw.githubusercontent.com/RelHelen/cinema/main/film.JSON';
    
    const schemes = await getData(urlSchemes);
    let moviesAll = await getData();

    const movies = schemes.map((scheme) => {
        return moviesAll.find((mov) => {
            return mov.imdbID === scheme.film
        })
    })
    return { schemes, movies };
};
const createDiv = (classEl) => {
    const el = createElement('div', {
        className: classEl,
    });
    return el;
};

export const moveline = async() => {
    const { schemes, movies } = await searchGet();    
    const moviLine = document.querySelector('#moviLine');
    const dateText = moviLine.querySelector('.section-date');

    // создаем новый объект `Date`
    let today = new Date();

    
    var options = {
        //short
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    // получить сегодняшнюю дату в формате `суббота, 1 июля 2023 г.`
    // var nowOptions = today.toLocaleString('ru-RU', options);

    var nowOptions = today.toLocaleString('us-US', options);
   
    dateText.innerHTML = nowOptions;
    const movieLineList = moviLine.querySelector('.movie-line__list');
    let articles = await renderArticle(movies);
    movieLineList.append(...articles);

    //вызов модального окна
    articles.forEach((article) => {
        let btns = article.querySelectorAll('.btn-time');
        btns.forEach(btn => {
            btn.addEventListener('click', async(event) => {
                if (event.target === btn) {
                    let scheme = schemes.find((item) => item.film == article.dataset['id']);
                    creatModal(article.dataset['id'], scheme, btn.textContent);
                }
            })        })
    })
}
const renderArticle = async(movies) => {
    let articles = [];
    movies.forEach((data) => {
        const article = createElement('article', {
            className: 'movie-line-entity',
        });
        article.dataset['id'] = `${data.imdbID}`;
        // article.dataset['title'] = `${data.Title}`;

        // entity-poster
        const entityPoster = createElement('div', {
            className: 'entity-poster',
        });
        entityPoster.dataset['role'] = 'hover-wrap';
        const embedResponsive = createDiv('embed-responsive embed-responsive-poster');
        const imgEmbed = createElement('img', {
            className: 'embed-responsive-item',
            src: `${data.Poster}`,
            alt: `${data.Title}`
        });
        embedResponsive.append(imgEmbed);

        const faster = createElement('div', {
            className: 'd-over bg-theme-lighted collapse animated faster',
            dataShowClass: 'fadeIn show',
            dataHideClass: 'fadeOut show',
        });
        const entityPlay = createDiv('entity-play');
        const link = createElement('a', {
            className: 'action-icon-theme action-icon-bordered rounded-circle',
            href: `https://www.youtube.com/watch?v=${data.imdbID}`,
            dataMagnificPopup: 'iframe',
        });

        const span = createElement('span', {
            className: 'icon-content',
        });
        const i = createElement('i', {
            className: 'fas fa-play',
        });
        span.append(i);
        link.append(span);
        entityPlay.append(link);
        faster.append(entityPlay);
        entityPoster.append(embedResponsive, faster);

        // entity-content
        const entityContent = createDiv('entity-content');
        const h4 = createElement('h4', {
            className: 'entity-title',
        });
        const linkCont = createElement('a', {
            className: 'content-link',
            href: ``,
            textContent: `${data.Title}`,
        });
        h4.append(linkCont);

        // entity-info
        const entityInfo = createDiv('entity-info');
        const infoLines = createDiv('info-lines');

        const infoShort1 = createDiv('info info-short');
        const spanIco1 = createElement('span', {
            className: 'text-theme info-icon',
        });
        const iStar = createElement('i', {
            className: 'fas fa-star',
        });
        spanIco1.append(iStar);
        const spanInfoText1 = createElement('span', {
            className: 'info-text',
            textContent: `${data.imdbRating}`
        });
        const spanInfoRest1 = createElement('span', {
            className: 'info-rest',
            textContent: `10`
        });
        infoShort1.append(spanIco1, spanInfoText1, spanInfoRest1);

        const infoShort2 = createDiv('info info-short');
        const spanIco2 = createElement('span', {
            className: 'text-theme info-icon',
        });
        const iClock = createElement('i', {
            className: 'fas fa-clock',
        });
        spanIco2.append(iClock);
        const spanInfoText2 = createElement('span', {
            className: 'info-text',
            textContent: `${data.Runtime}`
        });
        const spanInfoRest2 = createElement('span', {
            className: 'info-rest',
            textContent: `min`
        });
        infoShort2.append(spanIco2, spanInfoText2, spanInfoRest2);
        infoLines.append(infoShort1, infoShort2);

        const p = createElement('p', {
            className: 'text-short entity-text',
            textContent: `${data.Plot}`
        });
        entityInfo.append(infoLines, p);
        entityContent.append(h4, entityInfo);

        const timeSlot = displayTimeslot();
        article.append(entityPoster, entityContent, timeSlot);
        articles.push(article);
    });
    return articles;
};

const setTime = (date, hours = 0, minutes = 0, seconds = 0, ) => {
    return date.setHours(hours, minutes, seconds);
}

const addMinutes = (date, minutes = 0) => {
    return date.setMinutes(date.getMinutes() + minutes);
}

const parseTimeHHMM = (stringTime) => {
    //9:00:00
    // разбили объект stringTime на массив элементов
    let t = stringTime.split(":").map(Number);
    return t
}
const timeGet = (time) => {
    let btnTimes = [];
    for (let i = 1; i <= 3; i++) {
        const btnTime = createElement('span', {
            className: 'btn-time btn',
            ariaDisabled: 'true',
            textContent: `${time}`
        });
        const [hours, minutes, seconds] = parseTimeHHMM(time);
        const timeDate = new Date();
        //устанавливаем время для объекта даты
        setTime(timeDate, hours);
        // создаем новую дату
        let timeDateNew = new Date(timeDate);
        //добавляем 180 минут
        addMinutes(timeDateNew, 180);
        time = timeDateNew.toLocaleTimeString('ru-RU');
        // console.log(time);
        btnTimes.push(btnTime);
    }
    return btnTimes
}
const displayTimeslot = () => {
    const entityExtra = createDiv('entity-extra');
    const extraTitle = createElement('div', {
        className: 'text-uppercase entity-extra-title',
        textContent: 'время сеанса'
    });
    const entityShowtime = createDiv('entity-showtime');
    const showtimeItem = createDiv('showtime-item');

    const btnTimes = timeGet("10:00:00");
    showtimeItem.append(...btnTimes);
    entityShowtime.append(showtimeItem);
    extraTitle.append(entityShowtime);
    entityExtra.append(extraTitle);
    return entityExtra;
};

export default moveline;