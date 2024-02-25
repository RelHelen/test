// *получаем данные из localStorage по номеру схемы

export const getStorage = (id, time) => {

    if (localStorage.getItem(`seans-${id}-${time}`)) {
        //let data = JSON.parse(localStorage.getItem(`seans`));
        let data = JSON.parse(localStorage.getItem(`seans-${id}-${time}`));
        //seans-${idScheme}-${time}
        console.log('getStorage data=============', data);
        let findData = data.map(item => {
            if ((item.idScheme == id) && (item.time == time)) {
                return item;
            }
        });
        if (findData[0]) {
            console.log('getStorage findData===', findData);
            return findData;
        } else { return [] }
    } else {
        return [];
    }
}


// *отправляем данные  в localStorage
//setStorage(idScheme, time, data);
//{
// idScheme: `${idScheme}`,
//     idMovie: `${idMovie}`,
//     plase: `${value}`,
//     time: `${time}`,
// }
export const setStorage = (idScheme, time, data) => {

    const storage = getStorage(idScheme, time);

    console.log('storage======', storage);
    //делаем проерку данных перед отправкой на localStorage
    //если на один билет одно место, то возвращаем массив filterBooking только с правильными местами
    // filter находит совадения и возвращаеь массив при верных совпадениях
    let filterBooking = [];
    filterBooking = storage.filter((item) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].plase === item.plase) {
                return false;
            }
        }
        return item;
    });

    console.log('filterBooking - filterBooking: ', filterBooking);
    //собираем новый массив из данных и filterBooking
    const newBooking = [...filterBooking, ...data];



    // const newBooking = data;
    // localStorage.setItem(`seans-${id}`, JSON.stringify(newBooking));
    localStorage.setItem(`seans-${idScheme}-${time}`, JSON.stringify(newBooking));
    //localStorage.setItem(`seans`, JSON.stringify(data));
};