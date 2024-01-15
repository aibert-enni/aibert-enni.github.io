import { createCard } from "./createCard.js";
import { pets } from "./data.js";

const petsContainer = document.querySelector('.pets-cards');
const paginationStart = document.querySelector('.pagination-btn__start');
const paginationPrev = document.querySelector('.pagination-btn__previuos');
const paginationNumber = document.querySelector('.pagination-number')
const paginationNext = document.querySelector('.pagination-btn__next');
const paginationEnd = document.querySelector('.pagination-btn__end');

const buttons = [paginationStart, paginationPrev, paginationNext, paginationEnd];

let cardsNumber = 8;

if(window.innerWidth <= 992 & window.innerWidth > 767) {
    cardsNumber = 9;
} else if(window.innerWidth <= 510) {
    cardsNumber = 3;
}
console.log(pets.length);
let pageNumber = 1;
let activeCardsId = 0;

const generateCards = (cardsNumber) => {
    while(petsContainer.firstChild) {
        petsContainer.firstChild.remove();
    }

    if(pets.length < activeCardsId + cardsNumber) cardsNumber = pets.length % cardsNumber;

    for (let index = activeCardsId; index < cardsNumber + activeCardsId; index++) {
        let card = createCard(pets[index]['img'], pets[index]['name'], index);
        petsContainer.append(card);
    }
}

const checkPagination = () => {
    if(pageNumber == 1 && pets.length <= activeCardsId) {
        buttons.forEach((btn) => {
            btn.disabled = true;
            btn.classList.toggle("pagination-btn_disabled");
        })
    } else if(pageNumber <= 1) {
        buttons.slice(0, 2).forEach((btn) => {
            btn.disabled = true;
            btn.classList.add("pagination-btn_disabled")
        })
        buttons.slice(2).forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove("pagination-btn_disabled")
        })
    } else if(pets.length <= activeCardsId + cardsNumber) {
        buttons.slice(2).forEach((btn) => {
            btn.disabled = true;
            btn.classList.add("pagination-btn_disabled")
        })
        buttons.slice(0, 2).forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove("pagination-btn_disabled")
        })
    } else {
        buttons.forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove("pagination-btn_disabled");
        })
    }

}

const setPaginationNumber = (number) => {
    if(number == 1 || number == -1) {
        pageNumber += number;
    } else {
        pageNumber = number;
    }
    paginationNumber.textContent = pageNumber;
}

const nextCards = () => {
    activeCardsId += cardsNumber
    generateCards(cardsNumber);
    setPaginationNumber(1);
    checkPagination();
}

const prevCards = () => {
    activeCardsId -= cardsNumber;
    generateCards(cardsNumber);
    setPaginationNumber(-1)
    checkPagination();
}

const endCards = () => {
    activeCardsId = pets.length - cardsNumber;
    generateCards(cardsNumber);
    setPaginationNumber(Math.ceil(activeCardsId / cardsNumber) + 1);
    checkPagination();
}

const startCards = () => {
    activeCardsId = 1;
    generateCards(cardsNumber);
    pageNumber = 1;
    paginationNumber.textContent = pageNumber;
    checkPagination();
}

export function petsCards() {
    console.log(pets.length);
    checkPagination();
    generateCards(cardsNumber);
    paginationNext.addEventListener('click', nextCards);
    paginationPrev.addEventListener('click', prevCards);
    paginationEnd.addEventListener('click', endCards);
    paginationStart.addEventListener('click', startCards);
}

