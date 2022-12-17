export function slider(){
    const slider = document.querySelectorAll(".about-portfolio_slider");
    let index = 0;

    slider.forEach(slide => {
        const prev = slide.querySelector(".slider_prev-arrow");
        const next = slide.querySelector(".slider_next-arrow");
        const slides = slide.querySelectorAll(".projects-img");
        
        function remove() {
            slides.forEach(slide => {
                slide.classList.remove("slides-active");
            })
        }

        prev.addEventListener('click', () => {
            if(index == 0) {
                index = slides.length-1;
            } else {
                index--;
            }
            remove();
            slides.item(index).classList.toggle("slides-active");
        })
    })
}