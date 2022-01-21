// import Slider from "./slider.js";
const comments__slider = new Slider("comments__slider");
const candidates__slider = new Slider("candidates__slider");
const employers__slider = new Slider("employers__slider");
const headhunters__slider = new Slider("headhunters__slider");
const news__slider = new Slider("news__slider");
const mediaCheck1 = window.matchMedia("(max-width: 580px)");
const mediaCheck2 = window.matchMedia("(max-width: 890px)");

initStyles();
initSliders(
   comments__slider,
   candidates__slider,
   employers__slider,
   headhunters__slider,
   news__slider
);

window.addEventListener("resize", resizeHandler);

function resizeHandler() {
   setTimeout(() => {
      initSliders(
         comments__slider,
         candidates__slider,
         employers__slider,
         headhunters__slider,
         news__slider
      );
   }, 100);
}

function initSliders(
   comments__slider,
   candidates__slider,
   employers__slider,
   headhunters__slider,
   news__slider
) {
   console.log("slider init");
   comments__slider.init();
   if (mediaCheck1.matches) {
      candidates__slider.sliderElement.classList.add("slider__container");
      document
         .querySelector(`#${candidates__slider.id}~.slider__nav`)
         .classList.remove("slider__nav--hidden");

      employers__slider.sliderElement.classList.add("slider__container");
      document
         .querySelector(`#${employers__slider.id}~.slider__nav`)
         .classList.remove("slider__nav--hidden");

      headhunters__slider.sliderElement.classList.add("slider__container");
      document
         .querySelector(`#${headhunters__slider.id}~.slider__nav`)
         .classList.remove("slider__nav--hidden");

      candidates__slider.init();
      employers__slider.init();
      headhunters__slider.init();
   }else{
      document
         .querySelector(`#${candidates__slider.id}~.slider__nav`)
         .classList.add("slider__nav--hidden");
      document
         .querySelector(`#${employers__slider.id}~.slider__nav`)
         .classList.add("slider__nav--hidden");
      document
         .querySelector(`#${headhunters__slider.id}~.slider__nav`)
         .classList.add("slider__nav--hidden");
   }
   if (mediaCheck2.matches) {
      news__slider.sliderElement.classList.add("slider__container");
      console.log(document.querySelector(`#${news__slider.id}~.slider__nav`));
      document
         .querySelector(`#${news__slider.id}~.slider__nav`)
         .classList.remove("slider__nav--hidden");
      news__slider.init();
   } else {
      document
         .querySelector(`#${news__slider.id}~.slider__nav`)
         .classList.add("slider__nav--hidden");
   }
}

function initStyles() {
   document.querySelector(".header__menuBtn").addEventListener("click", () => {
      document
         .querySelector(".header__nav-wrapper")
         .classList.toggle("header__nav-wrapper--active");
      document
         .querySelector(".header__menuBtn")
         .classList.toggle("header__menuBtn--active");
   });
   document.querySelector(".cookies__btn").onclick = () => {
      document.querySelector(".cookies").classList.add("cookies--hide");
   };
}
