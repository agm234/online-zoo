
const slides = document.querySelectorAll('.previe');
const arrowUp = document.querySelector('.up');
const arrowDown = document.querySelector('.down');
const slidesZoos = document.querySelectorAll('.slider_item');
let activeSlideZoos = document.querySelector('.pet_active');
let currSlideZoos = 0;
let i = 0;
let massSlides = [];

slidesZoos.forEach(e => {
    i++;
    if (e === activeSlideZoos) {
        currSlideZoos = i - 1;
    }
})


slides.forEach(el => {
    el.addEventListener('click', function () {
        let massSrc = [];
        let video = document.querySelector('.if_video');
        massSrc = video.src.split('/');
        let videoId = massSrc.splice(massSrc.length - 1, 1);
        massSrc = el.src.split('/');
        let perevieId = massSrc.splice(massSrc.length - 2, 1);
        video.src = `https://www.youtube.com/embed/${perevieId}`
        el.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    })
});



arrowDown.addEventListener('click', function () {
    if (currSlideZoos < 3) {
        activeSlideZoos = document.querySelector('.pet_active');
        activeSlideZoos.classList.remove('pet_active');
        currSlideZoos++;
        slidesZoos[currSlideZoos].classList.add('pet_active');
        window.location.href = `${slidesZoos[currSlideZoos].dataset.name}.html`

    }
})


arrowUp.addEventListener('click', function () {
    if (currSlideZoos > 0) {
        activeSlideZoos = document.querySelector('.pet_active');
        activeSlideZoos.classList.remove('pet_active');
        currSlideZoos--;
        slidesZoos[currSlideZoos].classList.add('pet_active');
        window.location.href = `${slidesZoos[currSlideZoos].dataset.name}.html`
    }
})
