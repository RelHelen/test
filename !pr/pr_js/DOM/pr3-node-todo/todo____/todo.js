// добавлять новые задачи в список;
/*
<li class="todo__item" data-todo-state="active">
  <span class="todo__task">Текст задачи</span>
  <span class="todo__action todo__action_restore" data-todo-action="active"></span>
  <span class="todo__action todo__action_complete" data-todo-action="completed"></span>
  <span class="todo__action todo__action_delete" data-todo-action="deleted"></span>
</li>*/
/*
Значение атрибута data-todo-state будет определять состояние задачи:

active – активная;
completed – выполненная;
deleted – удалённая.
 */
// отмечать выполненные задачи(при этом они сразу исключаются из списка активных задач и переводятся в завершённый);
// удалять элементы в корзину;
// удалять окончательно задачи в корзине, а также при необходимости восстанавливать их;
// переключаться между делами(активными, завершёнными и удалёнными);
// автоматически сохранять списки дел в localStorage(необходимо для восстановления последнего состояния списка при повторном открытии страницы).

// создания объекта todo:
// const todo = {
//     action(e) {},
//     add() {},
//     create(text) {},
//     init() {},
//     update() {},
//     save() {}
// };
const todo = {
    action(e) {
        const target = e.target;
        console.log(target);
        if (target.classList.contains('todo__action')) {
            const action = target.dataset.todoAction;
            const elemItem = target.closest('.todo__item');
            if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
                elemItem.remove();
            } else {
                elemItem.dataset.todoState = action;
            }
            this.save();
        } else if (target.classList.contains('todo__add')) {
            this.add();
            this.save();
        }
    },
    add() {
        const elemText = document.querySelector('.todo__text');
        if (elemText.disabled || !elemText.value.length) {
            return;
        }
        document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
        elemText.value = '';
    },
    create(text) {
        const date = JSON.stringify({ add: new Date().toLocaleString().slice(0, -3) });
        return `
        <ul class="list-group list-group-horizontal rounded-0 bg-transparent">
        <li
          class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
          <div class="form-check">
            <input class="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
              aria-label="..." checked />
          </div>
        </li>
        <li
          class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
          <p class="lead fw-normal mb-0">${text}</p>
        </li>
        <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
          <div class="d-flex flex-row justify-content-end mb-1">
            
          <a href="#!" class="text-info mx-1 todo__actiontodo__action_restore" data-mdb-toggle="tooltip" title="active" data-todo-action="active">
         <i class="fa-solid fa-chart-line"></i>
         </a>

         <a href="#!" class="text-info mx-1 todo__action todo__action_complete" data-mdb-toggle="tooltip" title="completed" data-todo-action="completed">
         <i class="fa-solid fa-clipboard-check"></i>
         </a>
       
            <a href="#!" class="text-danger mx-1 todo__action todo__action_delete" data-mdb-toggle="tooltip" title="delete" data-todo-action="deleted">
            <i class="fa-solid fa-trash"></i>
            </a>

          </div>
          <div class="text-end text-muted">
            <a href="#!" class="text-muted" data-mdb-toggle="tooltip" title="Created date" >
            
              <p class="small mb-0 todo__date" data-todo-date="${date}"><i class="fas fa-info-circle me-2"></i>
              ${new Date().toLocaleString().slice(0, -3)}
              </p>
            </a>
          </div>
        </li>
      </ul>
       `;

    },
    init() {
        const fromStorage = localStorage.getItem('todo');

        if (fromStorage) {
            document.querySelector('.todo__items').innerHTML = fromStorage;
        }
        document.querySelector('.todo__options').addEventListener('change', this.update);
        document.addEventListener('click', this.action.bind(this));
    },
    update() {
        const option = document.querySelector('.todo__options').value;
        document.querySelector('.todo__items').dataset.todoOption = option;
        document.querySelector('.todo__text').disabled = option !== 'active';
    },
    save() { localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML); }
};

todo.init();