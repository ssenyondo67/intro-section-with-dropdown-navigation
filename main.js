function changeHeroImage(){
    const viewPortWidth=window.innerWidth;
    const heroImg=document.getElementById('heroImg');
    if(viewPortWidth <600){
        heroImg.setAttribute('src',"./images/image-hero-mobile.png")
    }else{
        heroImg.setAttribute('src',"./images/image-hero-desktop.png")
    }
}
changeHeroImage()

const menuIcon =document.getElementById('menuIcon')
const menu=document.getElementById('menu');
const closeMenu =document.getElementById('closeManu')
const companyList=document.getElementById('companyList')
const company =document.getElementById('company')
const companyArrowDown=document.getElementById('companyArrowDown');
const companyArrowUp=document.getElementById('companyArrowUp')
const featureList=document.getElementById('featureList')
const feature =document.getElementById('feature')
const featureArrowDown=document.getElementById('featureArrowDown');
const featureArrowUp=document.getElementById('featureArrowUp')

menuIcon.addEventListener('click',()=>{
    menu.classList.remove('navIsVisible')
    menu.classList.add('menu')
})
closeMenu.addEventListener('click',()=>{
    menu.classList.remove('menu')
    menu.classList.add('navIsVisible')
    companyList.classList.remove('show__list');    
    featureList.classList.remove('show__list');   
})

company.addEventListener('mouseover',()=>{
    companyList.classList.toggle('show__list');
    companyArrowUp.classList.toggle('hide-arrow');
    companyArrowDown.classList.toggle('hide-arrow');
})


feature.addEventListener('mouseover',()=>{
    featureList.classList.toggle('show__list');
    featureArrowUp.classList.toggle('hide-arrow');
    featureArrowDown.classList.toggle('hide-arrow');
})