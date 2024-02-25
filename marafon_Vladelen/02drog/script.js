const item = document.querySelector('.item');
const places = document.querySelectorAll('.placeholder');
item.addEventListener('dragstart', dragstart); //когда начали перетаскивание
item.addEventListener('dragend', dragend); //когда закончили перетаскивание
for (const place of places) {
  place.addEventListener('dragover', dragover); //срабатывает тогда, когда элемент находится над place
  place.addEventListener('dragenter', dragenter); // когда мы заходим на территорию place
  place.addEventListener('dragleave', dragleave); //когда мы перетащили, но вышли оттуда
  place.addEventListener('drop', drop); //когда отпустили
}
function dragstart(event) {
  console.log('drag start', event.target);
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}
function dragend(event) {
  console.log('drag end', event.target);
  event.target.classList.remove('hold', 'hide');
}

//движение мышкой
function dragover(event) {
  console.log('drag-- over');
  event.preventDefault();
}
function dragenter(event) {
  console.log('drag-- enter');
  event.target.classList.add('hovered');
}
function dragleave(event) {
  console.log('drag-- leave');
  event.target.classList.remove('hovered');
}
function drop(event) {
  console.log('drop--');
  event.target.classList.remove('hovered');
  event.target.append(item);
}
