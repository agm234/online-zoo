
/////////////////  Animal online slider /////////////////////////////////////
const sliderItems = document.querySelectorAll('.slider_item');
const slideWidth = document.querySelector('.slider_img').clientWidth;
const sliderWidth = document.querySelector('.slider').clientWidth;
const slider = document.querySelector('.slider');
const slideWidthActive = document.querySelector('.active').clientWidth;
let offset = 0;
let currSlide = 1;
let interval = (sliderWidth - slideWidthActive - ((sliderItems.length - 1) * slideWidth)) / (sliderItems.length - 1);

function left() {
    offset = offset + slideWidth + interval;

    if (currSlide - 1 >= 0) {
        document.querySelector('.previus_active').classList.remove('previus_active');
    }
    if (currSlide + 1 < sliderItems.length) {
        document.querySelector('.next_active').classList.remove('next_active');
    }
    document.querySelector('.active').classList.remove('active');
    currSlide -= 1;
    sliderItems[currSlide].classList.add('active');
    if (currSlide - 1 >= 0) {
        sliderItems[currSlide - 1].classList.add('previus_active');
    }
    sliderItems[currSlide + 1].classList.add('next_active');
    slider.style.left = offset + 'px';
    active2();
}

function right() {
    offset = offset - slideWidth - interval;

    if (currSlide - 1 >= 0) {
        document.querySelector('.previus_active').classList.remove('previus_active');
    }
    document.querySelector('.next_active').classList.remove('next_active');
    document.querySelector('.active').classList.remove('active');
    currSlide += 1;
    sliderItems[currSlide].classList.add('active');
    sliderItems[currSlide - 1].classList.add('previus_active');
    if (sliderItems[currSlide + 1] !== undefined) {
        sliderItems[currSlide + 1].classList.add('next_active');
    }
    slider.style.left = offset + 'px';
    active2();

}

function rangeslider(e, range, span) {
    newvalue = e;
    document.getElementById(range).value = e;
    let target = document.getElementById(span);
    target.innerHTML = '0' + newvalue + '/';
}

function active2() {
    sliderItems.forEach(el => {
        el.removeEventListener('click', left);
        el.removeEventListener('click', right);
        if (el.classList.contains('previus_active')) {
            el.addEventListener('click', left)
            el.addEventListener('click', rangeslider(currSlide + 1, 'slider_rang', 'gallary'));
        }
        if (el.classList.contains('next_active')) {
            el.addEventListener('click', right)
            el.addEventListener('click', rangeslider(currSlide + 1, 'slider_rang', 'gallary'));
        }
    })
}
active2();

let range = document.getElementById('slider_rang');
function rangeslider2() {
    let mass = [];
    mass.push(`${newvalue}`);
    newvalue = range.value;
    mass.push(newvalue);
    if (mass[1] > mass[0]) {
        right()
    }
    if (mass[1] < mass[0]) {
        left()
    }
    let target = document.getElementById('gallary');
    target.innerHTML = '0' + newvalue + '/';
}
range.addEventListener('input', rangeslider2);

////////////////////////////////////////////// Pets in zoo slider /////////////////////////////////////////////
const arrowRight = document.getElementById('right');
const arrowLeft = document.getElementById('left');
const sliderItemsPets = document.querySelectorAll('.pets_item');
const slideWidthPets = document.querySelector('.pets_img').clientWidth;
const petWrapper = document.querySelector('.pet_wrapper');
let currSlidePets = 0;
let currSlidePets1 = 0;
let offsetPets = 0;
let rangePets = document.getElementById('slider_pets');
let intervalPets = (petWrapper.clientWidth - (slideWidthPets * (sliderItemsPets.length))) / (sliderItemsPets.length - 1);

function rightPets() {
    currSlidePets1++;

    if (currSlidePets < sliderItemsPets.length - 1) {
        currSlidePets++;
        rangeslider(currSlidePets + 1, 'slider_pets', 'pets');
        let activeSlide = document.querySelector('.pets_item_active');
        activeSlide.classList.remove('pets_item_active');
        sliderItemsPets[currSlidePets].classList.add('pets_item_active');
        if (currSlidePets >= parseInt(document.querySelector('.pets_in_zoo_slider').clientWidth/slideWidthPets)) {
            offsetPets = slideWidthPets + intervalPets;
            document.querySelector('.pet_wrapper_pet').scrollBy(offsetPets, 0);
        }
    }
    if (currSlidePets1 === 8) {
        currSlidePets1 = 0;
        currSlidePets = 0;
        let activeSlide = document.querySelector('.pets_item_active');
        activeSlide.classList.remove('pets_item_active');
        sliderItemsPets[currSlidePets].classList.add('pets_item_active');
        document.querySelector('.pet_wrapper_pet').scrollBy(-(slideWidthPets + intervalPets) * sliderItemsPets.length, 0);
    }
    let target = document.getElementById('pets');
    target.innerHTML = '0' + (currSlidePets + 1) + '/';
    rangePets.value = (currSlidePets + 1);
    arrowRight.disabled = true;
    rangePets.disabled = true;
    setTimeout(() => {
        arrowRight.disabled = false;
        rangePets.disabled = false;
    }, 500);

}
function leftPets() {
    currSlidePets1--;

    if (currSlidePets > 0) {
        currSlidePets--;
        rangeslider(currSlidePets + 1, 'slider_pets', 'pets');
        let activeSlide = document.querySelector('.pets_item_active');
        activeSlide.classList.remove('pets_item_active');
        sliderItemsPets[currSlidePets].classList.add('pets_item_active');
        if (currSlidePets >= (parseInt(document.querySelector('.pets_in_zoo_slider').clientWidth/slideWidthPets)-1)) {
            offsetPets = slideWidthPets + intervalPets;
            document.querySelector('.pet_wrapper_pet').scrollBy(-offsetPets, 0);
        }
    }
    if (currSlidePets1 === -1) {
        currSlidePets1 = 7;
        currSlidePets = 7;
        let activeSlide = document.querySelector('.pets_item_active');
        activeSlide.classList.remove('pets_item_active');
        sliderItemsPets[currSlidePets].classList.add('pets_item_active');
        document.querySelector('.pet_wrapper_pet').scrollBy((slideWidthPets + intervalPets) * sliderItemsPets.length, 0);
    }
    let target = document.getElementById('pets');
    target.innerHTML = '0' + (currSlidePets + 1) + '/';
    rangePets.value = (currSlidePets + 1);
    arrowLeft.disabled = true;
    rangePets.disabled = true;
    setTimeout(() => {
        rangePets.disabled = false;
        arrowLeft.disabled = false;
    }, 500);

}


arrowRight.addEventListener('click', rightPets);
arrowLeft.addEventListener('click', leftPets);

function rangePet() {
    let mass = [];
    let target = document.getElementById('pets');
    mass.push(`${target.innerHTML[1]}`);
    newvalue = rangePets.value;
    mass.push(newvalue);
    if (mass[1] >= mass[0]) {
        rightPets();
    }
    if (mass[1] < mass[0]) {
        leftPets();
    }
    
    target.innerHTML = '0' + newvalue + '/';
}
rangePets.addEventListener('input', rangePet);

////////////////////////////////// how it works /////////////////////
let worksInput = document.getElementById('slider_works_rang');
let worksImgLengh=document.querySelector('.works_slider_img').clientWidth;
function rangeWorks() {
    let mass = [];
    let target = document.getElementById('works');
    mass.push(`${target.innerHTML[1]}`);
    newvalue = worksInput.value;
    mass.push(newvalue);
    if (mass[1] >= mass[0]) {
        let multiplier=Math.abs(mass[1]-mass[0])
        if(multiplier===0) multiplier=1;
        document.querySelector('.works_slider_wrapper_slides').scrollBy(worksImgLengh*multiplier, 0);
    }
    if (mass[1] < mass[0]) {
        let multiplier=Math.abs(mass[1]-mass[0])
         if(multiplier===0) multiplier=1;
        document.querySelector('.works_slider_wrapper_slides').scrollBy(-worksImgLengh*multiplier, 0);
    }
    
    target.innerHTML = '0' + newvalue + '/';
}
worksInput.addEventListener('input', rangeWorks);
////////////////////////////////// testimonials /////////////////////
let testimonialsInput = document.getElementById('slider_testimonials');
let testimonialsLengh=document.querySelector('.testimonials_item').clientWidth;
let testimonialsItems=document.querySelectorAll('.testimonials_item');
let testiLeft=document.getElementById("testiLeft");
let testiRight=document.getElementById("testiRight");
function rangeTestimonials() {
    let mass = [];
    let target = document.getElementById('testimonials_input');
    mass.push(`${target.innerHTML[1]}`);
    newvalue = testimonialsInput.value;
    mass.push(newvalue);
    if (mass[1] > mass[0]) {
        let multiplier=Math.abs(mass[1]-mass[0])
        document.querySelector('.testimonials_items_slide').scrollBy((testimonialsLengh)*multiplier, 0);
    }
    if (mass[1] < mass[0]) {
        let multiplier=Math.abs(mass[1]-mass[0])
        document.querySelector('.testimonials_items_slide').scrollBy(-(testimonialsLengh)*multiplier, 0);
    }
    
    target.innerHTML = '0' + newvalue + '/';
}
testimonialsInput.addEventListener('input', rangeTestimonials);

function testimonialsRight(){
    let target = document.getElementById('testimonials_input');
    newvalue = Number(testimonialsInput.value)+1;
    if (newvalue>testimonialsItems.length){
        document.querySelector('.testimonials_items_slide').scrollBy(-(testimonialsLengh*testimonialsItems.length), 0);   
        newvalue=1;
    } else  {
      
        document.querySelector('.testimonials_items_slide').scrollBy((testimonialsLengh), 0);
    }

    target.innerHTML = '0' + newvalue + '/';
    testimonialsInput.value=newvalue;
    
}
function testimonialsLeft(){
    let target = document.getElementById('testimonials_input');
    newvalue = Number(testimonialsInput.value)-1;
    if (newvalue<1){
        document.querySelector('.testimonials_items_slide').scrollBy(testimonialsLengh*testimonialsItems.length, 0);   
        newvalue=testimonialsItems.length;
    } else  document.querySelector('.testimonials_items_slide').scrollBy((-testimonialsLengh), 0);
    target.innerHTML = '0' + newvalue + '/';
    testimonialsInput.value=newvalue
   
}
testiRight.addEventListener('click', testimonialsRight);
testiLeft.addEventListener('click', testimonialsLeft);