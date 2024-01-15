const burgerBtn = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item__text');

const html = document.querySelector('html');
const body = document.querySelector('body');


export function showBurgerMenu() {
    burgerBtn.addEventListener('click', () => {
        navList.classList.toggle('nav-list_active');
        burgerBtn.classList.toggle('burger-menu_active');
        nav.classList.toggle('nav_blackout');
        if(navList.classList.contains('nav-list_active')) {
            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';
        } else {
            html.style.overflow = 'visible';
            body.style.overflow = 'visible';
        }
    })
    nav.addEventListener('click', (event) => {
        if(event.target == event.currentTarget) {
            burgerBtn.classList.toggle('burger-menu_active')
            navList.classList.toggle('nav-list_active');
            nav.classList.toggle('nav_blackout');
            body.style.overflow = 'visible';
            html.style.overflow = 'visible';
        }
    })
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerBtn.classList.remove('burger-menu_active')
            navList.classList.remove('nav-list_active');
            nav.classList.remove('nav_blackout');
            body.style.overflow = 'visible';
            html.style.overflow = 'visible';
        })
    })
}