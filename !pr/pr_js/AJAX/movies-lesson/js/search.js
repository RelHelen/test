//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=12f7113b
import getData from './services.js';

let url_api='http://www.omdbapi.com/?i=tt3896198&apikey=12f7113b';

const getSearch =async(query)=>{
  let url = `${url_api}&s=${query}`
  const data = await getData(url);
  console.log('-> ',data);
  return data;
}

 let searchInput = document.querySelector('.header__search-input');
 let searchForm = document.querySelector('.header__search-form');

export const search =async()=>{    
    searchForm.addEventListener('submit',async function(event){
        event.preventDefault();
        const list =searchFilms.querySelector('.search-films__list');
        //console.log('search-------------');
       const data=await getSearch(searchInput.value);
       //console.log('search-> ',data);
       let str=''; 
       //сделать вывод data.Error  ;

        data.Search.forEach(element => {

          str+=`
          <li class="other-films__item ">
             <a class="other-films__link " data-rating="7.6" href="https://youtu.be/${element.imdbID}">
                <img class="other-films__img " src="${element.Poster}" alt=" ">
              </a>
          </li>`;
        });
        list.innerHTML=str;
    })
}
export default search;



