import { changeColor } from './changeColor.js';
export function dropdown() {
    const dropdowns = document.querySelectorAll('.theme-switcher');
    let color;

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.switcher-select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.switcher-menu');
        const options = dropdown.querySelectorAll('.switcher-menu li');
        const selected = dropdown.querySelector('.selected');
    
        select.addEventListener('click', () => {
            select.classList.toggle('switcher-select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('switcher-menu-open');
        });
    
        options.forEach(option => {
            option.addEventListener('click', () =>{
                selected.innerText = option.innerText;
                select.classList.remove('switcher-select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('switcher-menu-open');
                options.forEach(option => {
                    option.classList.remove('active-theme');
                });
                option.classList.add('active-theme');
                color = selected.innerText.split(" ")[0].toLowerCase();
                changeColor(color);
            });
            
        });
    });
}