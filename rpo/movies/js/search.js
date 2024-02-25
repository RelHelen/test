import getData from './services.js';

//! поиск сериала/фильма


//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=12f7113b
const searchGet = async(query) => {
    // const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANGUAGE}&query=${query}&page=${page}&include_adult=false`;
    // //console.log('search url : ', url);
    //Guardians

    // const url_api = 'http://www.omdbapi.com/?i=tt3896198&apikey=12f7113b';
    const url_api = 'http://www.omdbapi.com/?i=tt3896198&apikey=12f7113b';
    // https: //www.omdbapi.com/?s=star+wars&apikey=key
    //let url = `${BASE_URL}&api_key=${API_KEY}&t=${query}`;
    let url = `${url_api}&s=${query}`;
    console.log('search url______ : ', url);
    const data = await getData(url);
    return data;
};

const filmWeek = document.querySelector('.film-week');
const galleryFilms = document.querySelector('.slider');

const title = document.querySelector('.search-result__header');
const searchForm = document.querySelector('.header__search-form');
const searchInput = document.querySelector('.header__search-input');
const listCard = document.querySelector('.search-result__inner');
const search = async() => {
    searchForm.addEventListener('submit', async(event) => {
        event.preventDefault();

        if (!searchInput.value) {
            listCard.remove();
            filmWeek();
            return; //если поле пустое то вернется и ничего не будет делать
        }

        console.log('searchInput.value: ', searchInput.value);

        const data = await searchGet(searchInput.value);
        console.log('data get: ', data);

        //         .then((data) => {
        //             console.log('data 1111: ', data);
        //             /*data.results.forEach((item) => {
        //               console.log('data.results::', item.backdrop_path);
        //             });*/

        //             //создать массив из не пустых постеров
        // filmWeek.remove();
        // galleryFilms.remove();

        if (data.Error) {
            title.textContent = data.Error;
            listCard.remove();
            console.log('results', data.Error);
            return;
        }
        let str = '';
        data.Search.forEach(item => {
            let poster = item.Poster ? item.Poster : `img / no_poster.jpg`;
            str += ` <li class = "other-films__item" >
            <a class = "other-films__link"
            data-rating = ""
            href = "https://youtu.be/Q50TXqNSGi8" >
            <img class = "other-films__img"
            src = "${poster}"
            alt = " ">
            </a> 
            </li>
                                `
        })

        listCard.innerHTML = str;



    });
};

export default search;