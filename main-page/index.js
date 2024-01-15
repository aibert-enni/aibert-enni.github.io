'use strict';

import { slider } from "../scripts/slider.js";
import { closeModalWindow} from "../scripts/modalWindow.js";
import { showBurgerMenu } from "../scripts/burger-menu.js";


if(window.innerWidth < 768) {
    showBurgerMenu();
}
slider();
closeModalWindow();