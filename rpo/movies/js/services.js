// функция получения данных из файла
let url = 'https://raw.githubusercontent.com/RelHelen/cinema/main/film.JSON';
//let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=12f7113b';
//const url_api = 'http://www.omdbapi.com/?i=tt3896198&apikey=12f7113b';
export const getData = async(urli) => {
    let urlRes = urli ? urli : url
        // url = './js/film.JSON';
        //console.log('url->', urlRes);
    try {
        const response = await fetch(urlRes);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.error('Ошибка__:', error);
    }
}


export default getData;