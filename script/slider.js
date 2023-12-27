import { createCard } from "./createCard.js";
import { pets } from "./data.js";

const petsCards = document.getElementById('pets-cards');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

const petsCardsStyles = window.getComputedStyle(petsCards);

let containerDimensions, containerWidth;

let activeCard = 1;
let flag = true;

const initSlider = () => {
    const card = createCard(pets[activeCard]['img'], pets[activeCard]['name'], activeCard);
    petsCards.append(card);
    nextCardGenerate();
    prevCardGenerate();
    containerDimensions = petsCards.firstChild.getBoundingClientRect();
    containerWidth = containerDimensions.width + parseInt(petsCardsStyles.gap);
}

const nextCardGenerate =() => {
    let nextCard = activeCard + 1;
    if(nextCard >= pets.length) nextCard = 0;
    const card = createCard(pets[nextCard]['img'], pets[nextCard]['name'], nextCard);
    petsCards.append(card);
}

const prevCardGenerate =() => {
    let prevCard = activeCard - 1;
    if(prevCard < 0) prevCard = pets.length - 1;
    const card = createCard(pets[prevCard]['img'], pets[prevCard]['name'], prevCard);
    petsCards.prepend(card);
}

const nextSlide = () => {
    if(!flag) return;
    flag = !flag;

    activeCard++;
    if(activeCard >= pets.length) activeCard = 0;
    nextCardGenerate();
    animate({
        duration: 1000,
        draw: function(progress){
            document.querySelectorAll('.pets-cards article').forEach((card) => {
                card.style.transform = `translateX(-${containerWidth * progress}px)`
            })
            if(progress == 1) {
                document.querySelectorAll('.pets-cards article').forEach((card) => {
                    card.style.transform = "translateX(0px)"
                })
            }
        },
        removeElement: document.querySelector('.pets-cards article')
    })
}

const prevSlide = () => {
    if(!flag) return;
    flag = !flag;

    activeCard--;
    const localContainerWidth = -containerWidth
    if(activeCard < 0) activeCard = pets.length - 1;
    prevCardGenerate();
    document.querySelectorAll('.pets-cards article').forEach((card) => {
        card.style.transform = `translateX(-${containerWidth}px)`;
    })
    animate({
        duration: 1000,
        draw: function(progress){
            document.querySelectorAll('.pets-cards article').forEach((card) => {
                card.style.transform = `translateX(${localContainerWidth *(1 - progress)}px)`
            })
            if(progress == 1) {
                document.querySelectorAll('.pets-cards article').forEach((card) => {
                    card.style.transform = "translateX(0px)"
                })
            }
        },
        removeElement: document.querySelector('.pets-cards article:last-child')
    })
}

const animate = ({duration, draw, removeElement}) => {
    const start = performance.now();

    requestAnimationFrame(function animate(time) {
        let step = (time - start) / duration;
        if(step > 1) step = 1;
        draw(step)
        if(step < 1) {
            requestAnimationFrame(animate)
        } else {
            removeElement.remove();
            flag = true;
        }
    })
}

export function slider() {
    initSlider();
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}
