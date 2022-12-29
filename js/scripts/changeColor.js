export function changeColor(color) {
    const classes = ["navbar", "header", "shadow-effect", "info-title", "button", "main", "card", "about-team", "about-portfolio", "contact-us", "contact-us_form-input", "footer", "footer__copyright-text"];
    classes.forEach(element => {
        let block = document.getElementsByClassName(element);
        for(let i = 0; i < block.length; i++) {
            block.item(i).className = element + " " + element + "__" + color;
        }
    });
}