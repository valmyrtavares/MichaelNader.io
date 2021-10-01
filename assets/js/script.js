import AnimaScroll from './module/ScrollAnimacao.js'

const animaScroll = new AnimaScroll('.box')
animaScroll.init();


const author = document.querySelector('#self')
author.addEventListener('click', smoothScroll)

function smoothScroll(event){
    event.preventDefault();
    const me = document.querySelector("#me");
    me.scrollIntoView({
        behavior:'smooth',
        block:"start"
    })
}

