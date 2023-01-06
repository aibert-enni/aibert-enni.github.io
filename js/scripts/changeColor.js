let prevColor;
export function changeColor(color) {
    const classes = ["body",  "light-blur-effect", "line", "nav-logo",  "navbar", "switcher-select", "caret", "switcher-menu", "header", "shadow-effect", "title__span", "info-title", "info-button", "button", "main", "main-article__text" ,"card", "short-info_line", "about-team", "about-team_line", "about-portfolio", "slider-arrow", "about-portfolio-line", "contact-us", "contact-us__line", "contact-us_form-input", "footer", "footer__title", "footer__link", "footer__copyright-text"];
    classes.forEach(element => {
        let block = document.getElementsByClassName(element);
        for(let i = 0; i < block.length; i++) {
            block.item(i).classList.remove(element + "__" + prevColor);
            block.item(i).classList.toggle(element + "__" + color);
        }
    });
    waveChange(color);
    prevColor = color;
}

function waveChange(color) {
    const waveSvg = document.querySelector(".wave-svg");
    const mainBlock =  document.querySelector('.main__' + color);
    let compStyles = window.getComputedStyle(mainBlock);
    let colorHex = compStyles.getPropertyValue('background-color');
    waveSvg.style.fill = colorHex;
}