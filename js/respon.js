const header=document.querySelector('.header')
const mobileMenu=document.querySelector('.header__menu');
const headerHight=header.clientHeight;

mobileMenu.onclick=()=>{
    const isClose=header.clientHeight===headerHight;
    if(isClose){
        header.style.height='auto';
    }
    else{
        header.style.height=null;
    }
}
//click vao bat ky menu nao deu mat di
const listMenu=document.querySelectorAll('.nav__item-link');
listMenu.forEach(element => {
    element.onclick=()=>{
        header.style.height=null;
    }
});


// up down

const scrollUp=document.querySelector('.scrollUp');


window.addEventListener('scroll',(position)=>{
    position=window.scrollY;
  
    if (position>=500){
        scrollUp.style.display='block'
    }
    else{
        scrollUp.style.display='none'
    }
    
});
scrollUp.onclick=()=>{
    
    document.documentElement.scrollTop = 0
}
