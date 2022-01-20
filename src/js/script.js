// import Slider from "./slider.js";
initStyles();

let commentsSlider = new Slider("comments__slider");
commentsSlider.init();

let candidatesSlider = new Slider("candidates__slider");
let employers__slider = new Slider("employers__slider");
let headhunters__slider = new Slider("headhunters__slider");


let mediaCheck = window.matchMedia("(max-width: 420px)");
if (mediaCheck.matches) {
   candidatesSlider.sliderElement.classList.add("slider__container");
   document.querySelector(`#${candidatesSlider.id}~.slider__nav`)
      .classList.toggle("slider__nav--hidden");

   employers__slider.sliderElement.classList.add("slider__container");
   document.querySelector(`#${employers__slider.id}~.slider__nav`)
      .classList.toggle("slider__nav--hidden");

   headhunters__slider.sliderElement.classList.add("slider__container");   
   document.querySelector(`#${headhunters__slider.id}~.slider__nav`)
      .classList.toggle("slider__nav--hidden");
   
   
   candidatesSlider.init();
   employers__slider.init();
   headhunters__slider.init();
}









function initStyles() {
   document.querySelector(".header__menuBtn").addEventListener("click", () => {
      document
         .querySelector(".header__nav-wrapper")
         .classList.toggle("header__nav-wrapper--active");
      document.querySelector(".header__menuBtn").classList.toggle("header__menuBtn--active");
   });
   document.querySelector(".cookies__btn").onclick = () => {
      document.querySelector(".cookies").classList.add("cookies--hide");
   };
}
