import { changeColor } from './changeColor.js';
export function onloadPage(color) {
    window.addEventListener("load", () => {
        changeColor(color);
    })
}