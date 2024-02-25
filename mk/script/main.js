document.addEventListener('mousemove', e => {
    // переопределяем свойства корневого элемента при движении мыши
    // зададим переменные, в котороых будут храниться текущие позиции мышки
    Object.assign(document.documentElement, {
        style: `
        --move-x:${(e.clientX - window.innerWidth / 2)*-0.006}deg;
        --move-y:${(e.clientY - window.innerHeight / 2)*0.01}deg;
        `
    })
})