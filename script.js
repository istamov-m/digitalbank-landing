// fetch('images/icon-hamburger.svg')
// .then(res => res.text())
// .then(svg => {
//     document.getElementById('hamburger-menu-toggle').innerHTML = svg
// })

const width = window.innerWidth
const introBg = document.querySelector('.bg-intro');

if(width < 1400){
    introBg.setAttribute('src', 'images/bg-intro-mobile.svg');
}


const mobileMenu = document.querySelector('.mobile-menu');
const toggleMenuBtn = document.querySelector('.toggle-menu')
const mobileMenuLayout = document.querySelector('.menu-layout');

function toggleMenu(){
    mobileMenu.classList.toggle('active')
    mobileMenuLayout.classList.toggle('active')
    
    if(mobileMenu.classList.contains('active')){
        toggleMenuBtn.setAttribute('src', 'images/icon-close.svg');
    } else{
        toggleMenuBtn.setAttribute('src', 'images/icon-hamburger.svg');
    }
}

const media = window.matchMedia('(width < 1400px)');

function mediaChange(e){
 alert('hello')
}


media.addEventListener('change', () => {
    if(media.matches) introBg.setAttribute('src', 'images/bg-intro-mobile.svg');
    else introBg.setAttribute('src', 'images/bg-intro-desktop.svg');
})