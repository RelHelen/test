import getData from './services.js';

const getToper = async(leng) => {
    let count = leng ? leng : 10;
    console.log('Toper count   : ', count);
    const data = await getData();
    let dataChange = await [...data];
    let dataToper = [];
    dataChange = dataChange.map(() => {
        if (dataToper.length == count) return;
        let dataTop = dataChange.reduce((max, cyrent) => {
            return parseInt(cyrent.Metascore) > parseInt(max.Metascore) ? cyrent : max;
        });
        dataChange.splice(dataChange.indexOf(dataTop), 1);
        //  console.log('dataTop.Metascore', dataTop.Metascore);
        dataToper.push(dataTop);
    });
    //console.log('dataToper   : ', dataToper);
    return dataToper;
};
//top movies
export const createToper = async() => {

    const data = await getToper(8);
    const listCard = document.querySelector('.other-films__list');
    let str = '';
    data.forEach((item) => {
        let poster = item.Poster ? item.Poster : `img / no_poster.jpg`;
        str += ` <li class = "other-films__item" >
                    <a class = "other-films__link"
                    data-rating = "${item.imdbRating} "
                    href = "https://youtu.be/Q50TXqNSGi8" >
                    <img class = "other-films__img"
                    src = "${poster}"
                    alt = " ">
                    </a> 
                    </li>
                    `
    })
    listCard.innerHTML = str;
}
export default createToper;