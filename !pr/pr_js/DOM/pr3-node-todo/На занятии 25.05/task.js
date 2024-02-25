const text=document.querySelector('#text');
const desc=document.querySelector('#desc');
const date=document.querySelector('#date');
const submit=document.querySelector('#submit');
const content=document.querySelector('#content');
/* <section class="block">
<p>имя: </p>
<p>описание: </p>
<p>дата: </p>
<span class="remove-button"></span>
</section> */
submit.addEventListener('click',creatTask);
function creatTask(){
//   section class="block"
const section= document.createElement('section');
section.classList.add('block');

/* <p>имя: </p> */
const pName=document.createElement('p');
pName.textContent='Имя: '+text.value;
 
/* <p>описание: </p> */ 
const pDesc=document.createElement('p');
pDesc.textContent='Описание:'+desc.value;
{/* <p>дата: </p> */}
const pData=document.createElement('p');
pData.textContent='Дата:'+date.value;

{/* <span class="remove-button"></span> */}
const spBtn=document.createElement('span');
spBtn.classList.add('remove-button');

section.append(pName, pDesc,pData,spBtn);
content.prepend(section);

spBtn.addEventListener('click',function(){
    let parent= spBtn.parentElement;
    // parent.classList.toggle('select');
    parent.remove();
})

text.value='';
desc.value='';
date.value='';
}