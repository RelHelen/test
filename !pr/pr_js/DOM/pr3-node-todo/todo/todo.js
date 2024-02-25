let addMessage = document.querySelector('.todo__text'),
    addButton = document.querySelector('.todo__add'),
    todoItems = document.querySelector('.todo__items'),
    todoOptions = document.querySelector('.todo__options'),
    todoList = [];
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessages(todoList);
}
addMessage.addEventListener('click', function() {
    let error = document.querySelector('.alert');
    addMessage.value = '';
    if (error) error.remove();
})
addButton.addEventListener('click', function(event) {
    // Отменяем действие по умолчанию
    event.preventDefault();

    // Получаем значения полей формы
    let text = addMessage.value.trim();
    let error = document.createElement('div');
    error.className = 'alert alert-danger';
    error.role = "alert";

    // Проверяем, что поля заполнены
    if (!text) {

        error.innerHTML = 'Пожалуйста, заполните  поле';
        addMessage.closest('.card').after(error);

        return;
    }


    // Проверяем, что поле содержит только буквы и цифры
    if (!isValid(text)) {
        error.innerHTML = 'Задача может содержать буквы и цифры';
        addMessage.closest('.card').after(error);

        return;
    }

    const date = new Date().toLocaleString();
    let newTodo = {
        date: date,
        message: addMessage.value,
        checked: false,
        deleted: false,
        important: false,
    };
    todoList.push(newTodo);
    // console.log(todoList);
    displayMessages(todoList);
    addMessage.value = '';
    localStorage.setItem('todo', JSON.stringify(todoList))
});

function displayMessages(todoList) {
    let displayMessage = '';
    //если длина массива = 0, то выводим пустую строку
    if (todoList.length == 0) todoItems.innerHTML = '';

    todoList.forEach(function(item, i) {
        displayMessage += `
        <ul class="list-group list-group-horizontal rounded-1 p-3 mb-2 justify-content-between bg-white todo__task" data-todo-date="${item.date}" data-todo-action="${item.deleted?'deleted':''}"  >
        <li
          class="list-group-item d-flex align-items-center bg-transparent    border-0 w-100 ">
          <div class="form-check">          

              <input class="form-check-input me-0" type="checkbox" id="item_${i}" ${item.checked ? 'checked':''} ${item.deleted?'disabled':''}>
              <label for="item_${i}" class="${item.important?'important':''}"  >${item.message}</label> 
              <div class="text-start text-muted">                       
              <p class="small mb-0 todo__date" data-todo-date="${item.date}">
              добавлено: ${item.date}
              </p>
          
          </div>
          </div>
         
        </li>
   
        <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div class="d-flex flex-row justify-content-end mb-1">       
            <a href="#!" class="text-primery mx-1 todo__action_delete" data-mdb-toggle="tooltip" title="delete" >
              <i class="fa-solid fa-trash todo__delete" id="item_${i}"></i>
            </a>
          </div>
       
        </li>
      </ul>
        `;
        todoItems.innerHTML = displayMessage;
    })
}
//пометили выполнена
todoItems.addEventListener('change', function(event) {

        let parent = event.target.closest('.todo__task');
        let dataParent = parent.getAttribute('data-todo-date');
        todoList.forEach(function(item) {
            // console.log(item, valueLabel);
            if (item.date === dataParent) {
                item.checked = !item.checked;
                localStorage.setItem('todo', JSON.stringify(todoList))
            }

        })

    })
    //правая кнопка мыши
    //пометили важность
todoItems.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        let parent = event.target.closest('.todo__task');
        let dataParent = parent.getAttribute('data-todo-date');
        todoList.forEach(function(item, i) {
            // console.log(item.message, event.target.innerHTML);
            if (item.date === dataParent) {
                //если нажата правая кнопка и клавиша ctrl или на макбуке
                //удалаем элемент
                if (event.ctrlKey || event.metaKey) {
                    todoList.splice(i, 1);
                }
                item.important = !item.important;
                localStorage.setItem('todo', JSON.stringify(todoList));
                displayMessages(todoList);
            }
        })
    })
    //пометили удалена
todoItems.addEventListener('click', function(event) {

    let todoDeletes = todoItems.querySelectorAll('.todo__delete');
    todoDeletes.forEach(function(elem) {
        if (event.target == elem) {
            let parent = event.target.closest('.todo__task');
            let dataParent = parent.getAttribute('data-todo-date');
            console.log(" parent:", dataParent);
            todoList.forEach(function(item) {
                if (item.date == dataParent) {
                    console.log(item);
                    item.deleted = true;

                    localStorage.setItem('todo', JSON.stringify(todoList));
                    displayMessages(todoList);
                }
            })
        }

    })

})

todoOptions.addEventListener('change', function(event) {
        let option = document.querySelector('.todo__options').value;
        let todoListFilter = [];
        todoList.forEach(function(item) {
            // console.log(option);
            // console.log(item[option]);
            if (item.hasOwnProperty(option) && item[option] == true) {
                console.log(item);
                todoListFilter.push(item);

            } else if (option == 'active' && item['deleted'] == false && item['checked'] == false) {
                todoListFilter.push(item);
            } else if (option == 'all') {
                todoListFilter.push(item);
            }
        });
        displayMessages(todoListFilter);
        option = '';
    })
    // валидация



function isValid(text) {
    // Проверка имени регулярным выражением
    const pattern = /^[a-zA-Zа-яА-Я0-9 \. - _]+$/;
    return pattern.test(text);
}

function isValidPassword(password) {
    // Проверка пароля регулярным выражением
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,20}$/;
    return pattern.test(password);
}