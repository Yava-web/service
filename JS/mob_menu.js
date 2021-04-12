let closeButMenu = document.querySelector('.mobile-menu .close-but');
let mobMenu = document.querySelector('.mobile-menu ul');
let menuBut = document.querySelector('.mobile-menu .menu-but');
let darkbg = document.querySelector('.dark-bg');
let menuItems = document.querySelectorAll('.mobile-menu ul li');

menuBut.onclick = function() {
    mobMenu.style.display = 'block';
    closeButMenu.style.display = 'block';
    darkbg.style.display = 'block';
    menuBut.style.display = 'none';
}
closeButMenu.onclick = function() {
    mobMenu.style.display = 'none';
    closeButMenu.style.display = 'none';
    menuBut.style.display = 'block';
    darkbg.style.display = 'none';
}
darkbg.onclick = function() {
    mobMenu.style.display = 'none';
    closeButMenu.style.display = 'none';
    menuBut.style.display = 'block';
    darkbg.style.display = 'none';
}
for(let item of menuItems) {
    item.onclick = function() {
        mobMenu.style.display = 'none';
        closeButMenu.style.display = 'none';
        menuBut.style.display = 'block';
        darkbg.style.display = 'none';
    }
}