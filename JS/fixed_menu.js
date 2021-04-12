let menu =document.getElementById('menu');
let header = document.querySelector('header');
let container = document.getElementById('cont'); 
let logoImg = document.querySelector('.logo img');
let upBut = document.querySelector('.up-button');
if (window.screen.width > 1280) {
window.onscroll = function() {
    if (window.pageYOffset > 600) {
        upBut.classList.add('shown');
        upBut.disabled = false;
        upBut.onclick = function () {
            window.scrollTo(0, 0);
        }
        
        menu.classList.add('fixed');
        header.style.paddingTop = '96.838px';        
        logoImg.src = 'img/auto-logo-light.png';
    } else if (window.pageYOffset < 600) {
        upBut.disabled = true;
        upBut.classList.remove('shown');

        menu.classList.remove('fixed');
        header.style.paddingTop = '';
        logoImg.src = 'img/auto-logo.png';
    }
}
}