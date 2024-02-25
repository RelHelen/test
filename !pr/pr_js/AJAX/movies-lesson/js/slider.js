let slideIndex = 1, offset=0;
const slider = document.querySelector('#slider');

const nextIndex=()=>{
return slideIndex +=1;
}
const prevIndex=()=>{
    return slideIndex -=1;
}
//кнопка следующий
slider.querySelector('.next').addEventListener('click',  function(){
     
    let slideList = document.querySelector('.slider__list');
    
    let gallerySlider = document.querySelectorAll('.gallery-slide');    
    slideIndex=nextIndex();  
    if(slideIndex>=gallerySlider.length)  {
        slideIndex=gallerySlider.length-1
    }
    let widthSlide =gallerySlider[slideIndex].offsetWidth;
    offset -=widthSlide;
    console.log(offset);
    console.log(-widthSlide*(gallerySlider.length-4));

    offset=Math.max(offset,-widthSlide*(gallerySlider.length-4));

    console.log('slideIndex',slideIndex);
    slideList.style.transform=`translateX(${offset}px)`;



})
//кнопка пред
slider.querySelector('.prev').addEventListener('click',  function(){     
    let slideList = document.querySelector('.slider__list');    
    let gallerySlider = document.querySelectorAll('.gallery-slide');    
    slideIndex=prevIndex();  
    if(slideIndex<=1)  {
        slideIndex=1
    }
    let widthSlide =gallerySlider[slideIndex].offsetWidth;
    offset +=widthSlide; 
     
    offset=Math.min(offset,0);
    console.log('slideIndex',slideIndex);
    slideList.style.transform=`translateX(${offset}px)`;
})

