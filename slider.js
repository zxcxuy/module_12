let slideCount = 1;
let timerId = null;
const btnFirstCircle = document.querySelectorAll('.slider__nav_btn')[0];
const btnSecondCircle = document.querySelectorAll('.slider__nav_btn')[1];
const btnThirdCircle = document.querySelectorAll('.slider__nav_btn')[2];
const svgCircleFirst = document.querySelectorAll('.slider__nav_btn_svg')[0];
const svgCircleSecond = document.querySelectorAll('.slider__nav_btn_svg')[1];
const svgCircleThird = document.querySelectorAll('.slider__nav_btn_svg')[2];
const sliderImgFirst = document.querySelectorAll('.slider__slide')[0];
const sliderImgSecond = document.querySelectorAll('.slider__slide')[1];
const sliderImgThird = document.querySelectorAll('.slider__slide')[2];

const slideSwiper = () => {
    timerId = setTimeout(() => {
        if (slideCount === 1) {
            goToSecondSlide();
        } else if (slideCount === 2) {
            goToThirdSlide();
        } else {
            goToFirstSlide();
        }
        slideSwiper();
    }, 5000); 
};
const goToSecondSlide = () => {
    slideCount = 2;
    sliderImgSecond.classList.remove('slider__slide_none');
    sliderImgFirst.classList.add('slider__slide_none');
    sliderImgThird.classList.add('slider__slide_none');
    svgCircleSecond.classList.add('active');
    svgCircleFirst.classList.remove('active');
    svgCircleThird.classList.remove('active');
}
const goToThirdSlide = () => {
    slideCount = 3;
    sliderImgSecond.classList.add('slider__slide_none');
    sliderImgFirst.classList.add('slider__slide_none');
    sliderImgThird.classList.remove('slider__slide_none');
    svgCircleSecond.classList.remove('active');
    svgCircleFirst.classList.remove('active');
    svgCircleThird.classList.add('active');
}
const goToFirstSlide = () => {
    slideCount = 1;
    sliderImgSecond.classList.add('slider__slide_none');
    sliderImgFirst.classList.remove('slider__slide_none');
    sliderImgThird.classList.add('slider__slide_none');
    svgCircleSecond.classList.remove('active');
    svgCircleFirst.classList.add('active');
    svgCircleThird.classList.remove('active');
}
btnSecondCircle.addEventListener('click', (e) => {
    e.preventDefault();
    if(slideCount != 2) {
        goToSecondSlide();
        clearTimeout(timerId);
        slideSwiper();  
    }
})
btnThirdCircle.addEventListener('click', (e) => {
    e.preventDefault();
    if(slideCount != 3) {
        goToThirdSlide();
        clearTimeout(timerId);
        slideSwiper();  
    }
})
btnFirstCircle.addEventListener('click', (e) => {
    e.preventDefault();
    if(slideCount != 1) {
        goToFirstSlide();
        clearTimeout(timerId);
        slideSwiper();  
    }
})

slideSwiper();