import createElement from './createElement.js';
import {getStorage,setStorage} from './storage.js';
//creatSinemaPlane(scheme,time);
const creatSinemaPlane=(scheme,time)=>{
 let  schemeData = scheme;
 let  timeData = time;
let bookingSeat;
if(getStorage(`seans`)){
 let dataSeans= getStorage(scheme.id,time);
 if(dataSeans[0]){
    bookingSeat=dataSeans.map(item=>item.plase);
 } 
}
bookingSeat=bookingSeat?bookingSeat:[];
const choiseSeat=createElement('form',{
  className:'choiseSeat',
})
const plane=createElement('fieldset',{
    className:'plane',
    name:'plane'
  })

let elements=schemeData.scheme.map((item,index)=>{
    const blockSeat=creatBlockSeat(index+1,item,bookingSeat);
   return  blockSeat;
})

}

//sinenaPlan(modalWindow,idMovie,scheme,time);
const sinenaPlan=(modalWindow,idMovie,scheme,time)=>{
    const choiseForm =creatSinemaPlane(scheme,time);

}

export const creatModal=(idMovie,scheme,time)=>{
  const modal = createElement('div',{
        className:'modal',
        id:'modal'
  }); 
  const modalActive = createElement('div',{
    className:'modalActive',    
}); 
const modalClose = createElement('div',{
    className:'modalClose',    
}); 
const img = createElement('img',{
    src:'./img/close.png',    
}); 
modalClose.append(img);
const modalWindow = createElement('div',{
    className:'modalWindow',    
}); 

modalActive.append(modalClose,modalWindow);
modal.append(modalActive);
document.body.append(modal);

modalClose.addEventListener('click',()=>{
 modal.remove();
})
sinenaPlan(modalWindow,idMovie,scheme,time);
}


export default creatModal;