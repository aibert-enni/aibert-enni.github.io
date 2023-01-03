import { changeColor } from './changeColor.js';
import { onloadPage } from './onloadPage.js';
let color;

export function dropdown() {

    const dropdowns = document.querySelectorAll('.theme-switcher');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.switcher-select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.switcher-menu');
        const options = dropdown.querySelectorAll('.switcher-menu li');
        let selected = dropdown.querySelector('.selected');
        color = selected.innerText.split(" ")[0].toLowerCase();

        onloadPage(color);

        select.addEventListener('click', () => {
            
            select.classList.toggle('switcher-select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('switcher-menu-open');

            //adding color styles
            select.classList.toggle('switcher-select-clicked__' + color);
            caret.classList.toggle('caret-rotate__' + color);
            menu.classList.toggle('switcher-menu-open__' + color);
        });
    
        options.forEach(option => {
            option.addEventListener('click', () =>{
                select.classList.remove('switcher-select-clicked__' + color);
                caret.classList.remove('caret-rotate__' + color);
                menu.classList.remove('switcher-menu-open__' + color);
                options.forEach(option => {
                    option.classList.remove('active-theme__' + color);
                });
                selected.innerText = option.innerText;
                color = selected.innerText.split(" ")[0].toLowerCase();
                select.classList.remove('switcher-select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('switcher-menu-open');
                option.classList.add('active-theme__' + color);
                changeColor(color);
            });
        });
        
    });
}

