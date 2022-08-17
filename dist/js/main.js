const menuBtn = document.querySelector('.menu-btn'),
    hamburger = document.querySelector('.menu-btn__burger'),
    nav = document.querySelector('.nav'),
    menuNav = document.querySelector('.menu-nav'),
    navitems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', togglemenu);

function togglemenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navitems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navitems.forEach(item => item.classList.remove('open'));


        showMenu =false;
    }
}