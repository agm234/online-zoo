
const arrowRightMap = document.getElementById('mapRight');
const arrowLeftMap = document.getElementById('mapLeft');
const sliderItemsPetsMap = document.querySelectorAll('.pets_slider_item');
const sliderItemsPetsMapimg = document.querySelectorAll('.pets_slider_img');
const petWrapperMap = document.querySelector('.pets_sider_pets');
const rangeMap = document.getElementById('slider_pets_map');
const mapItems = document.querySelectorAll('.animal_img');
const btn = document.getElementById('watch online');
const sliderWrapper = document.querySelector('.pets_sider_pets_wrapper');
let activeslide = document.querySelector('.pet_active');
const slideWidthPetsMap = document.querySelector('.pets_slider_item').clientWidth;
let currSlideMap = 1;
let currSlideMap1 = 1;
let offsetMap = 0;
let massPets = [];
let massPetsSlides = [];
let number = 0;
let interval=(petWrapperMap.clientWidth-slideWidthPetsMap*(sliderItemsPetsMap.length-1)-activeslide.clientWidth)/(sliderItemsPetsMap.length-1)


function numberOfImages() {
    number = Math.round((sliderWrapper.clientWidth / petWrapperMap.clientWidth) * sliderItemsPetsMap.length);
}

function mapActive1() {
    document.querySelector('.map_active').classList.remove('map_active');
    mapItems.forEach(el => {
        if (el.dataset.name === document.querySelector('.pet_active').id) {
            el.classList.add('map_active')
        }
    })
}

function mapRight() {
    numberOfImages()  
    currSlideMap1++;
    let activeslide = document.querySelector('.pet_active');
    if (currSlideMap < sliderItemsPetsMap.length - 1) {
        activeslide = document.querySelector('.pet_active');
        activeslide.classList.remove('pet_active');
        currSlideMap++;
        sliderItemsPetsMap[currSlideMap].classList.add('pet_active');
       
    }
    if (currSlideMap1 === sliderItemsPetsMap.length) {
        activeslide = document.querySelector('.pet_active');
        activeslide.classList.remove('pet_active');
        currSlideMap = 0;
        currSlideMap1 = 0;
        sliderItemsPetsMap[currSlideMap].classList.add('pet_active');
        sliderWrapper.scrollBy(-petWrapperMap.clientWidth, 0);
    }
    if(currSlideMap >= parseInt(sliderWrapper.clientWidth/slideWidthPetsMap)-1){
        sliderWrapper.scrollBy(slideWidthPetsMap+interval , 0);
    }
    let target = document.getElementById("slider_span_map");
    target.innerHTML = '0' + (currSlideMap + 1) + '/';
    rangeMap.value = currSlideMap + 1;
    if (massPets.includes(sliderItemsPetsMap[currSlideMap].id)) {
        mapActive1();
        btn.action = `../zoos/${sliderItemsPetsMap[currSlideMap].id}.html`;
    } else {
        btn.action = ``;
    }

}
function mapLeft() {
    numberOfImages();
    const slideWidthPetsMap = document.querySelector('.pets_slider_item').clientWidth;
    currSlideMap1--;
    
    if (currSlideMap > 0) {
        activeslide = document.querySelector('.pet_active');
        activeslide.classList.remove('pet_active');
        currSlideMap--;
        sliderItemsPetsMap[currSlideMap].classList.add('pet_active');
       
    }
    if (currSlideMap1 < 0) {
        activeslide = document.querySelector('.pet_active');
        activeslide.classList.remove('pet_active');
        currSlideMap =sliderItemsPetsMap.length - 1;
        currSlideMap1 = sliderItemsPetsMap.length - 1;
        sliderItemsPetsMap[currSlideMap].classList.add('pet_active');
        sliderWrapper.scrollBy(petWrapperMap.clientWidth, 0);
    }
    else if(currSlideMap === sliderItemsPetsMap.length-2 && window.screen.width>650 ){
        console.log(1)
        sliderWrapper.scrollBy(-108, 0);
      
    } 
    else  if(currSlideMap+1 >= parseInt(sliderWrapper.clientWidth/slideWidthPetsMap)-1){
        sliderWrapper.scrollBy(-slideWidthPetsMap-interval , 0);
    }
    
   
  
    let target = document.getElementById("slider_span_map");
    target.innerHTML = '0' + (currSlideMap + 1) + '/';
    rangeMap.value = currSlideMap + 1;
    if (massPets.includes(sliderItemsPetsMap[currSlideMap].id)) {
        mapActive1();
        btn.action = `../zoos/${sliderItemsPetsMap[currSlideMap].id}.html`;
    } else {
        btn.action = ``;
    }
}
function rangesMap() {
    let mass = [];
    mass.push(`${currSlideMap + 1}`);
    let newvaluemap = rangeMap.value;
    mass.push(newvaluemap);
    if (mass[1] > mass[0]) {
        mapRight();
    }
    if (mass[1] < mass[0]) {
        mapLeft();
    }
    let target = document.getElementById("slider_span_map");
    target.innerHTML = '0' + newvaluemap + '/';
}


mapItems.forEach(el => {
    massPets.push(el.dataset.name);
    el.addEventListener('click', function (e) {
        console.log(Number(e.target.dataset.num)+1)
        console.log(parseInt(sliderWrapper.clientWidth/slideWidthPetsMap)-1)
        sliderWrapper.scrollBy(-petWrapperMap.clientWidth, 0);
        if(Number(e.target.dataset.num)+1 > parseInt(sliderWrapper.clientWidth/slideWidthPetsMap)-1){
            sliderWrapper.scrollBy(slideWidthPetsMap+interval, 0);
        } 
        let mapactive = document.querySelector('.map_active');
        mapactive.classList.remove('map_active');
        e.target.classList.add('map_active');
        if (document.getElementById(`${e.target.dataset.name}`) !== undefined) {
            document.querySelector('.pet_active').classList.remove('pet_active');
            document.getElementById(`${e.target.dataset.name}`).classList.add('pet_active');

        }
        currSlideMap=Number(e.target.dataset.num);
        currSlideMap1= currSlideMap;
        rangeMap.value=currSlideMap+1;
        let newslide=currSlideMap+1;
        let target = document.getElementById("slider_span_map");
        target.innerHTML = '0' +  newslide + '/';

    })


})
sliderItemsPetsMap.forEach(el => {
    massPetsSlides.push(el);
    el.addEventListener('click', (e) => {
        document.querySelector('.pet_active').classList.remove('pet_active');
        e.target.parentNode.classList.add('pet_active');
        currSlideMap = massPetsSlides.indexOf(e.target.parentNode);
        currSlideMap1 = massPetsSlides.indexOf(e.target.parentNode);
        let target = document.getElementById("slider_span_map");
        target.innerHTML = '0' + (currSlideMap + 1) + '/';
        mapItems.forEach(elem => {
            if (elem.dataset.name === el.id) {
                document.querySelector('.map_active').classList.remove('map_active');
                elem.classList.add('map_active');
            }
        })
        if (massPets.includes(sliderItemsPetsMap[currSlideMap].id)) {
            mapActive1();
            btn.action = `../zoos/${sliderItemsPetsMap[currSlideMap].id}.html`;
        } else {
            btn.action = ``;
        }
    })



})
rangeMap.addEventListener('input', rangesMap);
arrowRightMap.addEventListener('click', mapRight);
arrowLeftMap.addEventListener('click', mapLeft);

