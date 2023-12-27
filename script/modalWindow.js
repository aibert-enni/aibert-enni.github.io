import { pets } from "./data.js";

const modalWindow = document.querySelector('.modal');
const img = document.querySelector('.modal-image');
const name = document.querySelector('.modal-title__heading');
const breed = document.querySelector('.modal-title__subheading');
const description = document.querySelector('.modal-description');
const parameters = document.querySelectorAll('.modal-list__span');

const closeBtn = document.querySelector('.modal-window__close-button');

export function showModal() {
    const id = this.parentElement.getAttribute('data-product-id');
    const pet = pets[id];

    img.setAttribute('src', pet['img']);
    name.textContent = pet['name'];
    breed.textContent = pet['type'] + " - " + pet['breed'];
    description.textContent = pet['description'];
    parameters[0].textContent = pet['age'];
    parameters[1].textContent = pet['inoculations'];
    parameters[2].textContent = pet['diseases'];
    parameters[3].textContent = pet['parasites'];

    modalWindow.style.display = 'block';
}

export function closeModalWindow() {
    closeBtn.addEventListener('click', () => {
        modalWindow.style.display = "none";
    })
}
