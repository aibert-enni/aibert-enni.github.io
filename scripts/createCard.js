import { showModal } from "./modalWindow.js";


export function createCard(imgPath, title, id) {
    const card = document.createElement('article');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    card.className = 'pets-cards__card';
    card.setAttribute('data-product-id', id);
    img.className = 'pets-cards__card-image';
    p.className = 'pets-cards__card-title'
    btn.className = 'pets-cards__card-button button';

    img.src = imgPath;
    p.textContent = title;
    btn.textContent = 'Learn more';

    btn.addEventListener('click', showModal)

    card.append(img, p, btn);

    return card;
}