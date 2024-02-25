export const menuLinks =(btnOpen,menu,classMenuOpen,btnClose)=>{
    const mbtnOpen= document.querySelector(btnOpen);
    const mmenu=document.querySelector(menu);  
    const mbtnClose=document.querySelectorAll(btnClose);
   //console.log(mbtnClose);
    mbtnOpen.addEventListener('click',function(){
        mmenu.classList.add(classMenuOpen);
    })
    mbtnClose.forEach(item=>{
       item.addEventListener('click',function(){
        mmenu.classList.remove(classMenuOpen);
    }) 
    })
    

}

export default menuLinks;