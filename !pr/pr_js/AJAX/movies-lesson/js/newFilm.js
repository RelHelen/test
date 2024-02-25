import getData from './services.js';
 const getFilm=async(count,type)=>{
    let countFilm = count?count:8;
    let typeFilm =type?type:'movie';

    const data = await getData();   
    let dataMovie= await data.filter(item=>item.Type==typeFilm);
   
    const [firstData, ...lastData] = dataMovie;
    lastData.length = countFilm;    
   
    return   lastData; 
}

export const displayNewFilm=async()=>{
    const data =await getFilm();
    console.log(data);
    let str='';
    data.forEach(item => {
        str +=        `
        <!-- начало -->
                         <div class = "gallery-slide" >
                         <article class = "poster-entity"  data-role = "hover-wrap" >
                        <div class = "gallery-poster" >
                        <img class = "embed-responsive-item"
                        src="${item.Poster}"alt = ""/>
                        </div>
                        <div class = "d-over bg-highlight-bottom">
                        <div class = "">
                        <a class = "action-icon-theme action-icon-bordered rounded-circle"
                        href = "https://youtu.be/${item.imdbID}"
                        data-magnific-popup = "iframe" >
                        <span class = "icon-content"> <i class = "fas-fa-play" > </i></span>
                        </a> </div> <h4 class = "entity-title">
                        <a class = "content-link" href ="#">${item.Title}</a> </h4 >

                        <div class = "entity-info" >
                        <div class = "info-lines" >
                        <div class = "info info-short" >
                        <span class = "text-theme info-icon" > <i class = "fas fa-star" > </i></span >
                        <span class = "info-text" > ${item.imdbRating}  / 10</span > </div> <div class = "info info-short" >
                        <span class = "text-theme info-icon" > <i class = "fas fa-clock" > </i></span >
                        <span class = "info-text" >${item.Runtime}</span> 
                        <span class = "info-rest" > </span> </div >

                        </div> 
                        </div> 
                        </div>
                         </article > 
                         </div>
                        <!-- /конец -->
        `
    });
  document.querySelector('.slider__list').innerHTML=str;  
}
export default displayNewFilm;