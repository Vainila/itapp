import Slider from "./slider.js";

let commentsSlider = new Slider("comments__slider");
console.log(commentsSlider)
initStyles();
commentsSlider.init();







function initStyles() {
   document.querySelector(".header__menuBtn").addEventListener("click", () => {
      document
         .querySelector(".header__nav-wrapper")
         .classList.toggle("header__nav-wrapper--active");
   });
   document.querySelector(".cookies__btn").onclick = () => {
      document.querySelector(".cookies").classList.add("cookies--hide");
   };

}


