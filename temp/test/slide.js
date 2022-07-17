const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

const btnPrev = document.querySelector(".slide-prev-button");
const btnNext = document.querySelector(".slide-next-button");

const slideItems = document.querySelectorAll(".slide-item");
const maxSlide = slideItems.length;

let currSlide = 1;

const pagination = document.querySelector(".slide-pagination");

for(let i = 0 ; i < maxSlide ; i ++) {
    if(i === 0) {
        pagination.innerHTML = `<li class="active">.</li>`;
    } else {
        pagination.innerHTML += `<li>.</li>`;
    }
}

const paginationItems = document.querySelectorAll(".slide-pagination > li");

btnNext.addEventListener("click", () => {
    currSlide++;

    if(currSlide <= maxSlide) {
        const offset = slideWidth  * (currSlide - 1);
        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    } else {
        currSlide--;
    }
});

btnPrev.addEventListener("click", () => {
    currSlide--;

    if(currSlide > 0) {
        const offset = slideWidth * (currSlide -1);

        slideItems.forEach((i) => {
            i.setAttribute("style", `left: {$-offset}px`);
        });
        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    } else {
        currSlide++;
    }
});

window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
});

for(let i = 0 ; i < maxSlide ; i ++) {
    paginationItems[i].addEventListener("click", () => {
        currSlide = i + 1;

        const offset = slideWidth * (currSlide - 1);

        slideItems.forEach((i) => {
            i.setAttribute("style", `left: ${-offset}px`);
        });

        paginationItems.forEach((i) => i.classList.remove("active"));
        paginationItems[currSlide - 1].classList.add("active");
    });
}