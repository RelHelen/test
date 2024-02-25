//получаем значение смещения при скроле this.scrollY и помещаем setProperty его в переменную   --scrollTop
//--scrollTop видна везде
window.addEventListener('scroll', e => {
    document.body.style.setProperty('--scrollTop', `${this.scrollY}px`)
        // Update method
        // document.body.style.cssText += `--scrollTop:${this.scrollY}px `

})

// плавный скролл
//указали какие классы используются content,wrapper
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})