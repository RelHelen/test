import getData from './services.js';
const getFilm=async()=>{
    const data = await getData();
    const last = await data[data.length-1];
    //console.log(last);
    return last;
}
export const displayFilmWeek=async()=>{
    const data= await getFilm();
    let str =
    `
    <div class = "container film-week__container"
                data-rating = "${data.imdbRating}" >
                <div class = "film-week__poster-wrapper" >
                <img class = "film-week__poster"
                        src = "${data.Poster}"
                        alt = " ">
                        </div>
                <h2 class = "film-week__title" >${data.Title}</h2> 
                <a class = "film-week__watch-trailer tube"
                        href = "https://youtu.be/${data.imdbID}"
                        aria-label = "смотреть трейлер"
                        title = "смотреть трейлер"> </a> 
            </div >       
    `;
    filmWeek.innerHTML=str;
}
export default displayFilmWeek;
