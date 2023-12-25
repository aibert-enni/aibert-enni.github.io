const getData = async () => {
    const response = await fetch('./data/pets.json');
    const json = await response.json();
    return json;
}

const pets = await getData();

let activeCard = 1;

const createCard = (imgPath, title) => {
    const card = document.createElement('article');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    card.className = 'pets-cards__card';
    img.className = 'pets-cards__card-image';
    p.className = 'pets-cards__card-title'
    btn.className = 'pets-cards__card-button button';

    img.src = imgPath;
    p.textContent = title;
    btn.textContent = 'Learn more';

    card.append(img, p, btn);

    return card;
}

const petsCards = document.getElementById('pets-cards');

const initSlider = () => {
    const card = createCard(pets[activeCard]['img'], pets[activeCard]['name']);
    petsCards.append(card);
    nextCardGenerate();
    prevCardGenerate();
}

const nextCardGenerate =() => {
    let nextCard = activeCard + 1;
    if(nextCard >= pets.length) nextCard = 0;
    const card = createCard(pets[nextCard]['img'], pets[nextCard]['name']);
    petsCards.append(card);
}

const prevCardGenerate =() => {
    let prevCard = activeCard - 1;
    if(prevCard < 0) prevCard = pets.length - 1;
    const card = createCard(pets[prevCard]['img'], pets[prevCard]['name']);
    petsCards.prepend(card);
}

initSlider();

const petsCardsStyles = window.getComputedStyle(petsCards)

const petCard = document.querySelectorAll('.pets-cards__card')
let containerDimensions = petCard[0].getBoundingClientRect();
let containerWidth = containerDimensions.width + parseInt(petsCardsStyles.gap);
let totalContainerWidth = 0;

let flag = true;

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



const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

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

