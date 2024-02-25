/**
 * добавляем данные о пасажираъ в готовые формы , удаляем формы и передаем в airplane
 * @param   forms, main 
 * @returns в airplane(main, data)
 */
import airplane from './airplane.js';
export const readyPlane = (forms, main) => {
    const data = [];
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            //form.elements - коллекция элементов ФОРМЫ

            console.log("file: readyPlane.js:7 ~ form.addEventListener ~  form.elements:", form.elements)
            for (const element of form.elements) {
                element.disabled = true;
            }
            data.push({
                name: form.name.value,
                ticket: form.ticket.value,
            })
            console.log("file: readyPlane.js:16 ~ form.addEventListener ~ data:", data)
            if (forms.length == data.length) {
                forms.forEach(form => form.remove());

                //самолет
                airplane(main, data);
            }
        });
    });
}
export default readyPlane;