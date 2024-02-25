import menuLinks from './menu.js';
import getData from './services.js';
import displayFilmWeek from './filmWeek.js';
import displayNewFilm from './newFilm.js';
import search from './search.js';
import moveline from './moveline.js';
//btnOpen,menu,classMenuOpen,btnClose
 
menuLinks(
    '.header__burger-btn',
    '.navigation',
    'navigation_active',
    '.navigation__close, .navigation__link'
    );
const header =document.querySelector('.other-films__title');
window.addEventListener('scroll',function(){
     document.body.style.setProperty('--scrollTop',
     `${window.scrollY}px`);
     //.scroll-left
     header.classList.add('scroll-left');

})   
displayFilmWeek();
displayNewFilm();
search();
moveline();