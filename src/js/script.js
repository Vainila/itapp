// import Slider from "./slider.js";
initStyles();
initSliders();











function initSliders() {
   const commentsSlider = new Slider("comments__slider");
   commentsSlider.init();

   const candidatesSlider = new Slider("candidates__slider");
   const employers__slider = new Slider("employers__slider");
   const headhunters__slider = new Slider("headhunters__slider");
   const news__slider = new Slider("news__slider");

   const mediaCheck1 = window.matchMedia("(max-width: 580px)");
   const mediaCheck2 = window.matchMedia("(max-width: 890px)");
   if (mediaCheck1.matches) {
      candidatesSlider.sliderElement.classList.add("slider__container");
      document
         .querySelector(`#${candidatesSlider.id}~.slider__nav`)
         .classList.toggle("slider__nav--hidden");

      employers__slider.sliderElement.classList.add("slider__container");
      document
         .querySelector(`#${employers__slider.id}~.slider__nav`)
         .classList.toggle("slider__nav--hidden");

      headhunters__slider.sliderElement.classList.add("slider__container");
      document
         .querySelector(`#${headhunters__slider.id}~.slider__nav`)
         .classList.toggle("slider__nav--hidden");

      candidatesSlider.init();
      employers__slider.init();
      headhunters__slider.init();
   }
   if (mediaCheck2.matches) {
      news__slider.sliderElement.classList.add("slider__container");
      document
         .querySelector(`#${news__slider.id}~.slider__nav`)
         .classList.toggle("slider__nav--hidden");
      news__slider.init();
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
