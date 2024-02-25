import { setStorage, getStorage } from './storage.js';
import createElement from './createElement.js';
//создание окна

const createDiv = (classEl) => {
    const el = createElement('div', {
        className: classEl,
    });
    return el;
};
/**
 * <div class="modal">
    <div class="modalActive">
        <div class="modalClose">
            <img src="close.png" />
        </div>
        <div class="modalWindow"></div>
    </div>
</div>
 */

export const creatModal = async(idMovie, scheme, time) => {
    const modal = createElement('div', {
        className: 'modal',
        id: 'modal'
    });
    const modalActive = createDiv('modalActive');
    const modalClose = createDiv('modalClose');
    const img = createElement('img', {
        src: './img/close.png',
    });
    modalClose.append(img);
    const modalWindow = createDiv('modalWindow');
    modalActive.append(modalClose, modalWindow);
    modal.append(modalActive);
    document.body.append(modal);

    // нажатие на крестик закрытия модального окна
    modalClose.addEventListener("click", function() {
        modal.remove();
        //modal.style.display = "none";
    });

    // закрытие модального окна на зону вне окна, т.е. на фон
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            //modal.style.display = "none";
            modal.remove();
        }
    });
    //строим схему и выводим ее в modalWindow
    sinemaPlan(modalWindow, scheme, idMovie, time);
}

// *создаем ряды стульев и возвращаем rowSeat
//номер ряда /кол сиденьев /занято
const creatBlockSeat = (n, count, bookingSeat) => {
    //<ol class="rowSeat">
    const rowSeat = createElement('ol', {
        className: 'rowSeat',
    });
    //for (let i = 1; i <= n; i++) {
    // <li>
    const wrapperRow = createElement('li');
    //   <ol class="seats">
    const seats = createElement('ol', {
        className: 'seats',
    });
    //сиденья нумеруем
    let seatsRow = [];
    for (let j = 1; j <= count; j++) {

        //<li class="seat">
        const seat = createElement('li', {
            className: 'seat',
        });
        //  <label>
        const wrapperCheck = createElement('label');

        // <input name="seat" type="checkbox" value="ряд место" />
        const seatValue = `${n}${j}`;
        const check = createElement('input', {
            name: 'seat',
            type: 'checkbox',
            value: seatValue,
            disabled: bookingSeat.includes(seatValue),
        });
        wrapperCheck.append(check);
        seat.append(wrapperCheck);
        seatsRow.push(seat)
            // return seat;
    }
    //  });
    seats.append(...seatsRow);
    wrapperRow.append(seats);
    rowSeat.append(wrapperRow);
    //}
    return rowSeat;
};


// *создаем схему и возвращаем форму схемы choisesSeat

const creatSinemaPlan = async(title, schemeData, time) => {

    let scheme = await schemeData;
    let countRow = scheme.length;
    //получим забраннированные места
    let bookingSeat;
    if (getStorage('seans')) {
        let dataSeans = getStorage(scheme.id, time);
        console.log('creatSinemaPlan dataSeans-> ', dataSeans);
        if (dataSeans[0]) {
            bookingSeat = dataSeans.map((item) => item.plase);
        }
    }
    bookingSeat = bookingSeat ? bookingSeat : [];

    //создание формы
    const choisesSeat = createElement('form', {
        className: 'choisesSeat',
    });
    //fieldset class="plane" name="plane"
    const plane = createElement('fieldset', {
        className: 'plane',
        name: 'plane',
    });
    //перебираем scheme  

    let elements = scheme.scheme.map((item, index) => {
        //создаем блок сиденьев
        const blockSeat = creatBlockSeat(index + 1, item, bookingSeat);

        return blockSeat;
    });
    plane.append(...elements);

    //<button class="confirm" type="submit">Подтвердить</button>
    const buttonSubmit = createElement('button', {
        className: 'confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    });
    choisesSeat.append(plane, buttonSubmit);

    return choisesSeat;
};

// *создадим возможность бронирования при отправки формы
const checkSeat = (form, idMovie, idScheme, time) => {
    // выбираем место
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let data = [];
        const formData = new FormData(form); //коллекция  элементов
        console.log('formData', ...formData);
        [...formData].forEach(([key, value]) => {
            data.push({
                idScheme: `${idScheme}`,
                idMovie: `${idMovie}`,
                plase: `${value}`,
                time: `${time}`,
            });
            setStorage(idScheme, time, data);
        });
        modal.remove();
    });
};

// *начальные парметры  и вызов функции построения 
const sinemaPlan = async(main, scheme, idMovie, time) => {
    const title = `Выберите место`;
    //схема:
    //const scheme = [ 11,11,12,12,11,11 ];
    const choiseForm = await creatSinemaPlan(title, scheme, time);

    //создадим возможность бронирования свободных мест
    checkSeat(choiseForm, idMovie, scheme.id, time);
    //добавим форму choiseForm в элемент main
    main.append(choiseForm);
};

export default creatModal;