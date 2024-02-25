/**
 * добавление стартовой формы - количество человек и заголовка
 * @param   app, title 
 * @returns  main, firstForm
 */
import createMyElement from "./creatElement.js";

//создаем h1
const createTitle = (title) => {
    const h1 = createMyElement('h1', {
        className: 'title',
        textContent: title,
    });
    return h1;
};
//создаем main
const createMain = () => {
    const main = createMyElement('main', {
        className: 'person-data',
    });
    //main.className = 'person-data';

    return main;
};
//создаем форму
const creatFirstForm = () => {
    const form = createMyElement('form', {
        className: 'field',
    });
    const label = createMyElement('label', {
        className: 'field__label',
        textContent: 'Укажите количесво человек (max:6)',
    });
    const input = createMyElement('input', {
        className: 'field__input',
        id: 'count',
        name: 'count',
        type: 'number',
        placeholder: '#',
        min: '1',
        max: '6',
        required: '',
    });
    const button = createMyElement('button', {
        className: 'btn-confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    });
    form.append(label, input, button);

    return form;
};
//добавление элементов на страницу
const start = (app, title) => {
    // console.log("file: start.js:5 ~ start ~ app",
    //     app, title);
    const h1 = createTitle(title);
    const main = createTitle();
    const firstForm = creatFirstForm();
    app.append(h1, main);
    main.append(firstForm);
    return { main, firstForm };
}



export default start;