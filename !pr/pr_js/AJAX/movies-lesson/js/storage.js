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

export const setStorage = (idScheme, time, data) => {

    const storage = getStorage(idScheme, time);     
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
    localStorage.setItem(`seans-${idScheme}-${time}`, JSON.stringify(newBooking));
   
};