import start from "./start.js";
import getFormPerson from "./formPerson.js";
import readyPlane from './readyPlane.js';

const init = (selectorApp, title) => {
        const app = document.querySelector(selectorApp);
        //деструктуировали
        const { main, firstForm } = start(app, title);
        //используем форму
        firstForm.addEventListener('submit', (e) => {
            e.preventDefault();
            //console.log('отправлено');
            //firstForm.count - это input по name
            const forms = getFormPerson(firstForm.count.value);
            console.log("file: index.js:13 ~ firstForm.addEventListener ~ forms:", forms);
            firstForm.remove();
            //...спред оператор разложил массив на элементы
            main.append(...forms);
            //готовим самолоет
            readyPlane(forms, main);
        });
    }
    // const obj = {
    //         a: 1,
    //         b: 'bbb'
    //     }
    //     //деструктуировали то есть вытаскиваем в переменные
    // const { a, b } = obj;


init('.app', 'выберите сеанс')