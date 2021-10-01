export default class ScrollAnimacao{
    constructor(sections){
        this.sections = document.querySelectorAll(sections);
        this.middleScreem = window.innerHeight * .5;
    }

    addEvent(){      
        window.addEventListener('scroll',()=>{
            this.animaScroll()
        })
    }

    animaScroll(){
        this.sections.forEach(item =>{
            let distTop = item.getBoundingClientRect().top;
            const isSectionVisible = (distTop - this.middleScreem)
            if(isSectionVisible<0 && isSectionVisible> -500){
                item.classList.add('ativo');
            }else{
                item.classList.remove('ativo');
            }
        })
    }

    init(){
        this.addEvent();
        console.log(this.sections)
    }

}